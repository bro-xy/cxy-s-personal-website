"use client";

import { motion } from "framer-motion";

const dimensions = [
  { label: "软件测试", value: 92 },
  { label: "项目管理", value: 85 },
  { label: "统筹执行", value: 90 },
  { label: "内容运营", value: 82 },
  { label: "技术开发", value: 70 },
];

const SIZE = 560;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = SIZE / 2 - 96;
const N = dimensions.length;
const RING_LEVELS = [0.25, 0.5, 0.75, 1];

function polar(r: number, angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180;
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)] as const;
}

function pathFor(values: number[]) {
  return (
    values
      .map((v, i) => {
        const [x, y] = polar((R * v) / 100, -90 + (i * 360) / N);
        return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
      })
      .join(" ") + " Z"
  );
}

function labelAnchor(angle: number): "start" | "middle" | "end" {
  const a = ((angle % 360) + 360) % 360;
  if (a < 15 || a >= 345) return "middle";
  if (a < 180) return "start";
  return "end";
}

export function SkillRadar() {
  const fullPath = pathFor(dimensions.map((d) => d.value));
  const zeroPath = pathFor(dimensions.map(() => 0.1));

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="mx-auto w-full max-w-[420px]"
    >
      {RING_LEVELS.map((lv) => {
        const pts = dimensions
          .map((_, i) => {
            const [x, y] = polar(R * lv, -90 + (i * 360) / N);
            return `${x.toFixed(2)},${y.toFixed(2)}`;
          })
          .join(" ");
        return (
          <polygon
            key={lv}
            points={pts}
            fill="none"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
          />
        );
      })}

      {dimensions.map((_, i) => {
        const [x, y] = polar(R, -90 + (i * 360) / N);
        return (
          <line
            key={i}
            x1={CX}
            y1={CY}
            x2={x}
            y2={y}
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
          />
        );
      })}

      <motion.path
        d={fullPath}
        initial={{ d: zeroPath }}
        whileInView={{ d: fullPath }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        fill="rgba(29,29,31,0.10)"
        stroke="rgba(29,29,31,0.75)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {dimensions.map((d, i) => {
        const [x, y] = polar((R * d.value) / 100, -90 + (i * 360) / N);
        return (
          <circle key={i} cx={x} cy={y} r="4" fill="#1d1d1f" />
        );
      })}

      {dimensions.map((d, i) => {
        const angle = -90 + (i * 360) / N;
        const [x, y] = polar(R + 48, angle);
        const anchor = labelAnchor(angle + 90);
        return (
          <g key={`l-${i}`}>
            <text
              x={x}
              y={y - 8}
              textAnchor={anchor}
              dominantBaseline="middle"
              fill="#1d1d1f"
              style={{ fontSize: 14, fontWeight: 600 }}
            >
              {d.label}
            </text>
            <text
              x={x}
              y={y + 12}
              textAnchor={anchor}
              dominantBaseline="middle"
              fill="#6e6e73"
              style={{ fontSize: 12, fontFamily: "var(--font-geist-mono)" }}
            >
              {d.value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
