"use client";

import { UserRoundPlus } from "lucide-react";
import { downloadVCard } from "@/lib/vcard";
import { cn } from "@/lib/utils";

export function SaveContactButton({ className }: { className?: string }) {
  return (
    <button
      onClick={downloadVCard}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-bright",
        className,
      )}
    >
      <UserRoundPlus className="h-4 w-4" />
      保存到通讯录
    </button>
  );
}
