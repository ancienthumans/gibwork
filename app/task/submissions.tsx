"use client";

import { Separator } from "@/components/ui/separator";
import { SubmissionCard } from "./submission-card";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Submissions() {
  const [tab, setTab] = useState("approved");

  return (
    <div className="flex flex-col gap-8">
      <div className="overflow-auto">
        <div className="flex">
          <button
            onClick={() => setTab("approved")}
            className={cn(
              "font-semibold shrink-0 transition-all text-sm px-4 h-10 border-y-2 hover:border-b-foreground text-muted-foreground hover:text-foreground -mb-[1px] border-transparent",
              tab == "approved" && "border-b-foreground text-foreground"
            )}
          >
            Approved (10)
          </button>

          <button
            onClick={() => setTab("pending")}
            className={cn(
              "font-semibold shrink-0 transition-all text-sm px-4 h-10 border-y-2 hover:border-b-foreground text-muted-foreground hover:text-foreground -mb-[1px] border-transparent",
              tab == "pending" && "border-b-foreground text-foreground"
            )}
          >
            Pending (100)
          </button>

          <button
            onClick={() => setTab("rejected")}
            className={cn(
              "font-semibold shrink-0 transition-all text-sm px-4 h-10 border-y-2 hover:border-b-foreground text-muted-foreground hover:text-foreground -mb-[1px] border-transparent",
              tab == "rejected" && "border-b-foreground text-foreground"
            )}
          >
            Rejected (20)
          </button>
        </div>
        <Separator />
      </div>

      {[...Array(10)].map((data, i) => (
        <SubmissionCard key={i + "submission-card"} data={data} />
      ))}
    </div>
  );
}
