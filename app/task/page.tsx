"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Check, CircleCheck, CircleX, Clock, Pencil, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { TaskCard } from "../components/task-list/task-card";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { BiMoneyWithdraw } from "react-icons/bi";
import { Progress } from "@/components/ui/progress";
import { SubmissionCard } from "./submission-card";
import { Submissions } from "./submissions";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="bg-muted h-8 font-semibold text-sm px-2 border-b flex items-center justify-center">
        <Clock className="size-4 inline-block mr-1" />
        <span className=" tabular-nums">23:59:59</span>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 pb-40 pt-8 flex flex-col gap-8">
        <div className="relative flex items-start gap-4 md:flex-row flex-col md:pr-24">
          <div className="size-16 rounded-full shrink-0 bg-foreground" />
          <div>
            <h1 className="font-bold text-lg sm:text-xl">
              This is a random title for a taskThis is a random title for a task
            </h1>
            <p className="text-muted-foreground text-sm">by ancienthuman</p>

            <div className="flex flex-wrap gap-2 mt-2">
              <Badge className="bg-emerald-600 text-emerald-50 border-emerald-600">
                PR Required
              </Badge>
              <Badge variant={"outline"}>UI/UX</Badge>
              <Badge variant={"outline"}>Website</Badge>
            </div>
          </div>

          <Button variant={"outline"} className="absolute top-0 right-0">
            Edit Task
          </Button>
        </div>
        <div className="flex gap-6 md:flex-row flex-col md:items-center border-y py-6">
          <div className="flex items-center gap-2 sm:gap-3 md:border-r md:pr-6">
            <img
              src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png?height=25&width=25&quality=50"
              className="size-12 sm:size-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-lg sm:text-xl font-bold">
                5,000 <span className="text-muted-foreground">USDC </span>
              </p>
              <p className="text-muted-foreground text-sm">$5,000 USD</p>
            </div>
          </div>

          <div className="grow">
            <div className="flex justify-between text-sm flex-wrap items-center gap-x-2">
              <p>
                <span className="text-foreground font-semibold">1000 / 2000 USDC</span> Remaining
              </p>

              <p className="text-xs text-muted-foreground">($100 USD)</p>
            </div>
            <Progress value={33} className="mt-2" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">Description</p>

          <div>
            <p className="text-muted-foreground text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">Requirements</p>

          <div className="bg-muted rounded-r-md p-4 flex flex-col gap-2 border-l-4 border-primary">
            <p className="text-sm text-muted-foreground">
              To ensure eligibility, please make sure your submission meets the following criteria
            </p>

            <div>
              <p className="text-sm">
                - Connect Your Github Account to the Gibwork Platform
                <br />- Share a successfully merged Pull Request to an Open Source Repository
                <br />- Share your Github Profile. Only connected accounts are eligible. Preference
                to those who contributed to Solana Open Source.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Textarea rows={8} placeholder="WYSIWYG COMPONENT" />

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="ml-auto">Post Submission</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Post Submission?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to submit your response now? You won't be able to edit it
                  later.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Post</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <Submissions />
      </div>
    </div>
  );
}
