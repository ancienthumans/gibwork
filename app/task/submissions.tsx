"use client";

import { Separator } from "@/components/ui/separator";
import { SubmissionCard } from "./submission-card";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function Submissions() {
  const [tab, setTab] = useState("approved");
  const [edit, setEdit] = useState(false);

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

      {tab == "approved" && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <div className="flex items-center gap-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-10 rounded-full"
              />
              <div>
                <p className="font-medium">Xander</p>
                <p className="text-muted-foreground text-xs">19 Oct 2024</p>
              </div>
            </div>

            <div className="ml-auto flex items-center flex-wrap justify-end gap-2">
              <div className="font-semibold flex text-lg items-center gap-1 justify-center">
                100,000
                <img
                  src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="size-6 rounded-full inline-block"
                />
              </div>
              {true && <Button size={"sm"}>Claim</Button>}
            </div>

            <div>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
          </div>
        </div>
      )}

      {tab == "pending" && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <div className="flex items-center gap-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-10 rounded-full"
              />
              <div>
                <p className="font-medium">Xander</p>
                <p className="text-muted-foreground text-xs">19 Oct 2024</p>
              </div>
            </div>

            <div className="flex gap-2 ml-auto flex-wrap justify-end">
              <Button size={"sm"} variant={"outline"}>
                Reject
              </Button>
              <Button size={"sm"}>Approve</Button>
            </div>
          </div>

          <div>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      )}

      {tab == "pending" && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <div className="flex items-center gap-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-10 rounded-full"
              />
              <div>
                <p className="font-medium">Xander</p>
                <p className="text-muted-foreground text-xs">19 Oct 2024</p>
              </div>
            </div>

            {!edit && (
              <Button
                onClick={() => setEdit(true)}
                size={"sm"}
                variant={"outline"}
                className="ml-auto"
              >
                Edit
              </Button>
            )}
          </div>

          {edit ? (
            <div className="flex flex-col gap-3">
              <Textarea rows={8} placeholder="WYSIWYG COMPONENT" />
              <div className="flex gap-2 ml-auto flex-wrap justify-end">
                <Button onClick={() => setEdit(false)} size={"sm"} variant={"outline"}>
                  Cancel
                </Button>
                <Button size={"sm"}>Update</Button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
          )}
        </div>
      )}

      {tab == "rejected" && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <div className="flex items-center gap-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-10 rounded-full"
              />
              <div>
                <p className="font-medium">Xander</p>
                <p className="text-muted-foreground text-xs">19 Oct 2024</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-semibold">Rejected</p>
          </div>

          <div>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      )}

      {[...Array(10)].map((data, i) => (
        <SubmissionCard key={i + "submission-card"} data={data} />
      ))}
    </div>
  );
}
