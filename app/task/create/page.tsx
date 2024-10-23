"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronDown, ChevronRight, CircleHelp, Plus, Wallet } from "lucide-react";
import { Fragment, useState } from "react";

import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];
const steps = ["Overview", "Requirements", "Additional Options", "Deposit & Publish"];

export default function Home() {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState<Date | undefined>(undefined);
  const [tags, setTags] = useState<string[]>([]);
  const [PRRequired, setPRRequired] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [accepted, setAccepted] = useState(false);

  return (
    <div>
      <div className="p-4 border-b flex flex-wrap gap-2 items-center">
        {steps.map((step, index) => (
          <Fragment key={index + "tab"}>
            <button
              onClick={() => setCurrentStep(index + 1)}
              className="flex items-center gap-2 font-semibold"
            >
              <div
                className={cn(
                  "flex items-center justify-center rounded-full size-6 text-sm transition-all",
                  currentStep >= index + 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {index + 1}
              </div>
              <p
                className={cn(
                  "text-sm text-foreground transition-all",
                  currentStep >= index + 1 ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {step}
              </p>
            </button>

            {index !== steps.length - 1 && <ChevronRight className="size-4" />}
          </Fragment>
        ))}
      </div>

      <div className="mx-auto w-full max-w-3xl px-4 pt-8 py-16 sm:py-24 sm:px-6 grid gap-6">
        {currentStep === 1 && (
          <Card className="flex flex-col gap-6 p-0 sm:p-6 sm:border border-0 sm:shadow-sm shadow-none">
            <div>
              <h1 className="font-semibold text-lg sm:text-xl">Task Overview</h1>
              <p className="text-muted-foreground text-sm">
                Basic information about the task you are about to create.
              </p>
            </div>

            <div className="space-y-1.5">
              <Label>Title</Label>
              <Input placeholder="Title" />
            </div>

            <div className="space-y-1.5">
              <Label>Description</Label>

              <p className="text-muted-foreground text-xs">
                Describe the task in detail, the purpose here is for users to understand what the
                job/task entails. Save the requirements for the next section.
              </p>

              <Textarea rows={8} placeholder="wysiwug..." />
            </div>

            <div className="space-y-1.5">
              <Label>Tags</Label>
              <p className="text-muted-foreground text-xs">
                Select up to 2 tags that best describe the task you are about to create.
              </p>

              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework) => (
                  <button
                    key={framework}
                    disabled={tags.length >= 2 && !tags.includes(framework)}
                    onClick={() => {
                      console.log(framework);
                      if (tags.includes(framework)) {
                        setTags((prev) => prev.filter((tag) => tag !== framework));
                      } else {
                        setTags((prev) => [...prev, framework]);
                      }
                    }}
                    className="disabled:opacity-40 transition-all"
                  >
                    <Badge
                      variant={"outline"}
                      className={cn(
                        "px-3 gap-1 py-1 text-sm font-normal",
                        tags.includes(framework) && "bg-foreground text-background"
                      )}
                    >
                      {tags.includes(framework) ? (
                        <Check className="size-4 -ml-1" />
                      ) : (
                        <Plus className="size-4 -ml-1" />
                      )}{" "}
                      {framework}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Deadline</Label>

              <p className="text-muted-foreground text-xs">
                This is the date by which the task ends at.
              </p>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal flex",
                      !deadline && "text-muted-foreground"
                    )}
                  >
                    {deadline ? format(deadline, "PPP") : <span>Pick a date</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={deadline}
                    onSelect={setDeadline}
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </Card>
        )}

        {currentStep === 2 && (
          <Card className="flex flex-col gap-6 p-0 sm:p-6 sm:border border-0 sm:shadow-sm shadow-none">
            <div>
              <h1 className="font-semibold text-lg sm:text-xl">Submission Requirements</h1>
              <p className="text-muted-foreground text-sm">
                The requirements that a user must meet to be considered for payment.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Guidelines</Label>
              <p className="text-muted-foreground text-xs">
                Provide a detailed explanation of what the submission should include.
              </p>

              <Textarea rows={8} placeholder="wysiwug..." />
            </div>

            <div className="flex items-center gap-2">
              <Switch id="PR Required" checked={PRRequired} onCheckedChange={setPRRequired} />
              <Label htmlFor="PR Required">PR Required</Label>
            </div>

            {PRRequired && (
              <>
                <div className="flex flex-col gap-2">
                  <Label>Repository</Label>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a repositiory" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>-</SelectLabel>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Brach</Label>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a branch where the pull request should be made to" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>-</SelectLabel>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Issue</Label>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an issue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>-</SelectLabel>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
          </Card>
        )}

        {currentStep === 3 && (
          <Card className="flex flex-col gap-6 p-0 sm:p-6 sm:border border-0 sm:shadow-sm shadow-none">
            <h1 className="font-semibold text-lg sm:text-xl">Additional Options</h1>

            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <Label>Private Task</Label>
                <p className="text-xs text-muted-foreground">
                  Task will be hidden and can only be accessed via link.
                </p>
              </div>
              <Switch />
            </div>
          </Card>
        )}

        {currentStep === 4 && (
          <Card className="flex flex-col gap-6 p-0 sm:p-6 sm:border border-0 sm:shadow-sm shadow-none">
            <div>
              <h1 className="font-semibold text-lg sm:text-xl">Deposit & Publish</h1>
              <p className="text-muted-foreground text-sm">
                Enter the reward amount you want to deposit for this task.
              </p>
            </div>

            <div className="rounded-md bg-muted p-4 flex flex-col gap-3 focus-within:outline outline-1 outline-primary ">
              <div className="flex justify-between items-center gap-1">
                <Label>Amount</Label>

                <div className="flex items-center justify-end gap-2 ml-auto flex-wrap">
                  <div className="text-muted-foreground text-xs flex items-center gap-1 font-medium">
                    <Wallet className="size-3 inline-block" />
                    700 BONK
                  </div>
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    className="text-xs bg-background border-background border hover:border-primary hover:bg-background hover:text-foreground"
                  >
                    MAX
                  </Button>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={"ghost"}
                  className="shrink-0 bg-background border-background border hover:border-primary hover:bg-background hover:text-foreground"
                >
                  <img
                    src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png?height=25&width=25&quality=50"
                    className="size-5 rounded-full"
                  />
                  SOL
                  <ChevronDown className="size-4" />
                </Button>

                <input
                  placeholder="0.00"
                  className="grow min-w-0 w-full focus:outline-none sm:text-lg h-10 placeholder:text-muted-foreground text-right bg-transparent border-none font-semibold pr-0"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <p className="text-muted-foreground text-sm">Deposit</p>
                <p className="font-bold text-sm text-right">500 USDC</p>
              </div>

              <div className="flex justify-between items-center flex-wrap gap-2">
                <p className="text-muted-foreground text-sm">
                  Platform Fee (5%){" "}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CircleHelp className="size-4 inline-block cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>5% of deposit in USDC value</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </p>
                <p className="font-bold text-sm text-right">0.01 SOL</p>
              </div>

              <div className="flex justify-between items-center flex-wrap gap-2">
                <p className="text-muted-foreground text-sm">Transaction Fee</p>
                <p className="font-bold text-sm text-right">0.0001 SOL</p>
              </div>

              <Separator className="my-2" />

              <div className="flex justify-between items-center flex-wrap gap-2">
                <p className="text-muted-foreground text-base font-semibold">Total</p>
                <p className="font-bold text-foreground text-base text-right">
                  500 USDC + 0.011 SOL
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="terms" checked={accepted} onCheckedChange={(v) => setAccepted(!!v)} />
              <Label htmlFor="terms">
                I agree that the deposit will be locked until the task is completed.
              </Label>
            </div>
          </Card>
        )}

        <Separator className="sm:hidden" />

        <div className="flex flex-wrap gap-2 justify-end">
          {currentStep > 1 && (
            <Button onClick={() => setCurrentStep(currentStep - 1)} variant={"secondary"}>
              Prev
            </Button>
          )}
          {currentStep < steps.length ? (
            <Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
          ) : (
            <Button disabled={!accepted}>Deposit & Publish</Button>
          )}
        </div>
      </div>
    </div>
  );
}
