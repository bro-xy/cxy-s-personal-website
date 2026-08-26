import { ShapeGrid } from "@/components/ui/shape-grid";

export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <ShapeGrid
        direction="right"
        speed={0.6}
        borderColor="rgba(29,29,31,0.06)"
        squareSize={40}
        hoverFillColor="rgba(29,29,31,0.08)"
        shape="square"
        hoverTrailAmount={3}
      />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_-10%,rgba(29,29,31,0.018),transparent_62%)]" />
    </div>
  );
}
