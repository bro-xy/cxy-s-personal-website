"use client";

import { useRef, useEffect, useState } from "react";
import "./shape-grid.css";

export type ShapeGridShape = "square" | "hexagon" | "triangle" | "circle";

export interface ShapeGridProps {
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  shape?: ShapeGridShape;
  hoverTrailAmount?: number;
  className?: string;
}

export function ShapeGrid({
  direction = "right",
  speed = 1,
  borderColor = "#d2d2d7",
  squareSize = 40,
  hoverFillColor = "rgba(29,29,31,0.06)",
  shape = "square",
  hoverTrailAmount = 0,
  className = "",
}: ShapeGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hoveredSquare = useRef<{ col: number; row: number } | null>(null);
  const trailCells = useRef<Array<{ col: number; row: number }>>([]);
  const cellOpacities = useRef<Map<string, number>>(new Map());

  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isHex = shape === "hexagon";
    const isTri = shape === "triangle";
    const isCircle = shape === "circle";
    const hexHoriz = squareSize * 1.5;
    const hexVert = squareSize * Math.sqrt(3);

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      numSquaresX.current = Math.ceil(canvas.offsetWidth / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.offsetHeight / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawHex = (cx: number, cy: number, size: number) => {
      ctx!.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const vx = cx + size * Math.cos(angle);
        const vy = cy + size * Math.sin(angle);
        if (i === 0) ctx!.moveTo(vx, vy);
        else ctx!.lineTo(vx, vy);
      }
      ctx!.closePath();
    };

    const drawCircle = (cx: number, cy: number, size: number) => {
      ctx!.beginPath();
      ctx!.arc(cx, cy, size / 2, 0, Math.PI * 2);
      ctx!.closePath();
    };

    const drawTriangle = (cx: number, cy: number, size: number, flip: boolean) => {
      ctx!.beginPath();
      if (flip) {
        ctx!.moveTo(cx, cy + size / 2);
        ctx!.lineTo(cx + size / 2, cy - size / 2);
        ctx!.lineTo(cx - size / 2, cy - size / 2);
      } else {
        ctx!.moveTo(cx, cy - size / 2);
        ctx!.lineTo(cx + size / 2, cy + size / 2);
        ctx!.lineTo(cx - size / 2, cy + size / 2);
      }
      ctx!.closePath();
    };

    const drawSquare = (cx: number, cy: number, size: number) => {
      ctx!.beginPath();
      ctx!.rect(cx - size / 2, cy - size / 2, size, size);
      ctx!.closePath();
    };

    const getCellKey = (col: number, row: number) => `${col},${row}`;

    const getCellCenter = (col: number, row: number) => {
      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX =
          ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
        const offsetY =
          ((gridOffset.current.y % hexVert) + hexVert) % hexVert;
        return {
          cx: col * hexHoriz + offsetX,
          cy:
            row * hexVert +
            ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) +
            offsetY,
        };
      }
      if (isTri) {
        const halfW = squareSize / 2;
        const colShift = Math.floor(gridOffset.current.x / halfW);
        const rowShift = Math.floor(gridOffset.current.y / squareSize);
        const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
        const offsetY =
          ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        return {
          cx: col * halfW + offsetX,
          cy:
            row * squareSize +
            squareSize / 2 +
            offsetY +
            ((col + colShift + row + rowShift) % 2 !== 0 ? 0 : 0),
          flip: ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0,
        };
      }
      if (isCircle) {
        const offsetX =
          ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY =
          ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        return {
          cx: col * squareSize + squareSize / 2 + offsetX,
          cy: row * squareSize + squareSize / 2 + offsetY,
        };
      }
      const offsetX =
        ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
      const offsetY =
        ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
      return {
        cx: col * squareSize + squareSize / 2 + offsetX,
        cy: row * squareSize + squareSize / 2 + offsetY,
      };
    };

    const drawGrid = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx!.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / squareSize) + 4;
      const rows = Math.ceil(h / squareSize) + 4;

      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const key = getCellKey(col, row);
          const alpha = cellOpacities.current.get(key);
          const center = getCellCenter(col, row) as {
            cx: number;
            cy: number;
            flip?: boolean;
          };

          if (alpha && alpha > 0) {
            ctx!.globalAlpha = alpha;
            if (isHex) drawHex(center.cx, center.cy, squareSize);
            else if (isTri) drawTriangle(center.cx, center.cy, squareSize, !!center.flip);
            else if (isCircle) drawCircle(center.cx, center.cy, squareSize);
            else drawSquare(center.cx, center.cy, squareSize);
            ctx!.fillStyle = hoverFillColor;
            ctx!.fill();
            ctx!.globalAlpha = 1;
          }

          if (isHex) drawHex(center.cx, center.cy, squareSize);
          else if (isTri) drawTriangle(center.cx, center.cy, squareSize, !!center.flip);
          else if (isCircle) drawCircle(center.cx, center.cy, squareSize);
          else drawSquare(center.cx, center.cy, squareSize);
          ctx!.strokeStyle = borderColor;
          ctx!.lineWidth = 0.5;
          ctx!.stroke();
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      const offsetX =
        ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
      const offsetY =
        ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

      const col = Math.floor((mx - offsetX) / squareSize);
      const row = Math.floor((my - offsetY) / squareSize);

      const key = getCellKey(col, row);
      hoveredSquare.current = { col, row };
      cellOpacities.current.set(key, 1);

      if (hoverTrailAmount > 0) {
        trailCells.current = [{ col, row }];
        for (let i = 1; i <= hoverTrailAmount; i++) {
          const dx = i * 8;
          const dy = i * 4;
          const tCol = Math.floor((mx - dx - offsetX) / squareSize);
          const tRow = Math.floor((my - dy - offsetY) / squareSize);
          const tKey = getCellKey(tCol, tRow);
          trailCells.current.push({ col: tCol, row: tRow });
          if (!cellOpacities.current.has(tKey)) {
            cellOpacities.current.set(tKey, Math.max(0.15, 1 - i * 0.18));
          }
        }
      }
    };

    const onMouseLeave = () => {
      hoveredSquare.current = null;
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const animate = () => {
      if (!reduced) {
        const delta = speed * 0.4;
        switch (direction) {
          case "left":
            gridOffset.current.x -= delta;
            break;
          case "right":
            gridOffset.current.x += delta;
            break;
          case "up":
            gridOffset.current.y -= delta;
            break;
          case "down":
            gridOffset.current.y += delta;
            break;
        }
      }

      const keysToDelete: string[] = [];
      cellOpacities.current.forEach((alpha, key) => {
        if (alpha > 0) {
          const nextAlpha = alpha - 0.025;
          if (nextAlpha <= 0) keysToDelete.push(key);
          else cellOpacities.current.set(key, nextAlpha);
        }
      });
      keysToDelete.forEach((k) => cellOpacities.current.delete(k));

      drawGrid();
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [
    direction,
    speed,
    borderColor,
    squareSize,
    hoverFillColor,
    shape,
    hoverTrailAmount,
    reduced,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`shape-grid-canvas ${className}`}
      aria-hidden="true"
    />
  );
}
