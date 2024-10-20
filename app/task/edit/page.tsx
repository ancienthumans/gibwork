"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl py-16 sm:py-24 px-4 sm:px-6 grid gap-8">
      <Link
        href={"/task"}
        className="flex group items-center text-muted-foreground text-sm gap-1 mr-auto"
      >
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-all" /> Back
      </Link>

      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-semibold text-lg sm:text-xl">Edit Task</h1>
          <p className="text-muted-foreground text-sm truncate">🚀 Raid to Earn 🚀</p>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Title</Label>
          <Input placeholder="Title" />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Description</Label>

          <p className="text-muted-foreground text-xs">
            Describe the task in detail, the purpose here is for users to understand what the
            job/task entails.
          </p>

          <Textarea rows={8} placeholder="wysiwug..." />
        </div>

        <div className="flex flex-wrap gap-2 justify-end">
          <Button variant={"secondary"}>Cancel</Button>
          <Button>Update Task</Button>
        </div>
      </div>
    </div>
  );
}
