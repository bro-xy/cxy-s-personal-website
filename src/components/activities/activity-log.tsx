"use client";

import { useState } from "react";
import type { Activity } from "@/content";
import { ActivityCard } from "./activity-card";

function activityYear(activity: Activity) {
  return (activity.sortDate ?? activity.period).slice(0, 4);
}

export function ActivityLog({ activities }: { activities: Activity[] }) {
  const [year, setYear] = useState("all");
  const years = [...new Set(activities.map(activityYear))];
  const visible = year === "all"
    ? activities
    : activities.filter((activity) => activityYear(activity) === year);

  return (
    <section id="activity-log" className="activity-log" aria-labelledby="activity-log-title">
      <div className="activity-log-heading">
        <div>
          <h2 id="activity-log-title">兼职现场记录</h2>
          <p aria-live="polite">{visible.length} 条记录 · 最近的在前</p>
        </div>
        {years.length > 1 && (
          <div className="activity-filters" role="group" aria-label="按年份筛选">
            {["all", ...years].map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={year === option}
                onClick={() => setYear(option)}
              >
                {option === "all" ? "全部" : option}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="activity-list">
        {visible.map((activity) => (
          <ActivityCard activity={activity} key={activity.slug} />
        ))}
      </div>
    </section>
  );
}
