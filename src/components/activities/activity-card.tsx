"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Activity } from "@/content";

export function ActivityCard({ activity }: { activity: Activity }) {
  const { photos } = activity;
  const [index, setIndex] = useState(0);

  function changePhoto(direction: number) {
    setIndex((current) => (current + direction + photos.length) % photos.length);
  }

  return (
    <article className="activity-entry">
      {photos.length > 0 && (
        <div className="activity-entry-photo">
          <Image
            key={photos[index]}
            src={photos[index]}
            alt={`${activity.name}现场照片 ${index + 1}`}
            fill
            sizes="(min-width: 900px) 405px, (min-width: 640px) 44vw, 94vw"
            className="object-cover"
          />
          {photos.length > 1 && (
            <div className="activity-photo-controls">
              <button type="button" onClick={() => changePhoto(-1)} aria-label="上一张照片">
                <ChevronLeft aria-hidden size={18} />
              </button>
              <span aria-live="polite">{index + 1} / {photos.length}</span>
              <button type="button" onClick={() => changePhoto(1)} aria-label="下一张照片">
                <ChevronRight aria-hidden size={18} />
              </button>
            </div>
          )}
        </div>
      )}
      <div className="activity-entry-copy">
        <div className="activity-entry-meta">
          <span className="editorial-date">{activity.period}</span>
          <span className="activity-entry-role">{activity.role}</span>
        </div>
        <h3>{activity.name}</h3>
        {activity.points.length > 0 ? (
          <ul>
            {activity.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        ) : (
          <p>{activity.summary}</p>
        )}
      </div>
    </article>
  );
}
