import type { Activity } from "@/content";
import { ActivityPhotos } from "./activity-photos";
import { Badge } from "@/components/ui/badge";

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="activity-entry flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
      <ActivityPhotos name={activity.name} photos={activity.photos} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold tracking-tight">{activity.name}</h3>
          <Badge className="shrink-0">{activity.role}</Badge>
        </div>
        <p className="mt-1 font-mono text-xs text-muted">{activity.period}</p>
        {activity.points.length > 0 ? (
          <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted">
            {activity.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        ) : (
          <p className="mt-3 text-sm leading-relaxed text-muted">{activity.summary}</p>
        )}
      </div>
    </article>
  );
}
