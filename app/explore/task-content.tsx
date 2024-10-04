"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TaskCard } from "../components/task-list/task-card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export function TaskContent() {
  const [open, setOpen] = React.useState(false);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [sortBy, setSortBy] = React.useState("featured");

  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Don't Have Any Work to Do?</CardTitle>
          <CardDescription>
            Create a personalized service where others can submit requests directly to you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Create a Service</Button>
        </CardContent>
      </Card>
      <div className="flex gap-2 flex-wrap">
        <div className="relative grow">
          <Input placeholder="Search task..." className="pl-8" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 pointer-events-none" />
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="justify-between gap-0 px-3 font-normal"
            >
              Category {categories.length > 0 && ` (${categories.length})`}
              <ChevronDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search category" className="h-9" />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework}
                      value={framework}
                      onSelect={(currentValue) => {
                        console.log("currentValue:", currentValue);
                        if (categories.includes(currentValue)) {
                          setCategories((prev) =>
                            prev.filter((category) => category !== currentValue)
                          );
                        } else {
                          setCategories((prev) => [...prev, currentValue]);
                        }
                      }}
                    >
                      <Checkbox checked={categories.includes(framework)} />
                      <label className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {framework}
                      </label>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Select value={sortBy} onValueChange={(v) => setSortBy(v)}>
          <SelectTrigger className="shrink-0 w-auto">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by</SelectLabel>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {categories.length > 0 && (
        <div className="flex gap-1 flex-wrap">
          {categories.map((category) => (
            <button
              key={category + "cancel button"}
              onClick={() => setCategories((prev) => prev.filter((cat) => cat !== category))}
            >
              <Badge variant={"secondary"} className="gap-1 hover:opacity-80">
                {category} <X className="size-4" />
              </Badge>
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-2">
        {sampleWork.map((item) => (
          <TaskCard key={item.title} task={item} />
        ))}
      </div>
    </div>
  );
}

const sampleWork = [
  {
    id: "1",
    title: "Complete the project documentation",
    content: "Write comprehensive documentation for the new project.",
    requirements: "Experience with technical writing.",
    tags: ["documentation", "writing"],
    isOpen: true,
    asset: undefined,
    taskSubmissions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    createdAt: "2023-10-01T10:00:00Z",
    transactionId: "txn_123456",
    user: {
      id: "user_1",
      username: "johndoe",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      profilePicture: "https://api.dicebear.com/9.x/thumbs/svg?seed=1",
      createdAt: "2022-01-01T10:00:00Z",
      totalAmountEarned: 5000,
      totalAmountSpent: 2000,
      percentRank: 85,
      isPhoneVerified: true,
    },
    isHidden: false,
    isFeatured: true,
    slug: "complete-the-project-documentation",
    deadline: "2023-10-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Design a new logo",
    content: "Create a modern and sleek logo for our brand.",
    requirements: "Proficiency in graphic design software.",
    tags: ["design", "logo"],
    isOpen: true,
    asset: undefined,
    taskSubmissions: [0, 0, 0, 0],
    createdAt: "2023-10-02T11:00:00Z",
    transactionId: "txn_123457",

    user: {
      id: "user_2",
      username: "janedoe",
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@example.com",
      profilePicture: "https://api.dicebear.com/9.x/thumbs/svg?seed=2",
      createdAt: "2022-02-01T11:00:00Z",
      totalAmountEarned: 7000,
      totalAmountSpent: 3000,
      percentRank: 90,
      isPhoneVerified: false,
    },
    isHidden: false,
    isFeatured: false,
    slug: "design-a-new-logo",
    deadline: "2023-10-20T11:00:00Z",
  },
  {
    id: "3",
    title: "Develop a mobile app",
    content: "Create a mobile application for our e-commerce platform.",
    requirements: "Experience with React Native or Flutter.",
    tags: ["mobile", "development"],
    isOpen: true,
    asset: undefined,
    taskSubmissions: [0, 0, 0],
    createdAt: "2023-10-03T12:00:00Z",
    transactionId: "txn_123458",
    user: {
      id: "user_3",
      username: "alice",
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
      profilePicture: "https://api.dicebear.com/9.x/thumbs/svg?seed=3",
      createdAt: "2022-03-01T12:00:00Z",
      totalAmountEarned: 8000,
      totalAmountSpent: 4000,
      percentRank: 88,
      isPhoneVerified: true,
    },
    isHidden: false,
    isFeatured: true,
    slug: "develop-a-mobile-app",
    deadline: "2023-10-25T12:00:00Z",
  },
  {
    id: "4",
    title: "Create a marketing plan",
    content: "Develop a comprehensive marketing plan for our new product launch.",
    requirements: "Experience in marketing and strategy planning.",
    tags: ["marketing", "strategy"],
    isOpen: true,
    asset: undefined,
    taskSubmissions: [0, 0],
    createdAt: "2023-10-04T13:00:00Z",
    transactionId: "txn_123459",
    user: {
      id: "user_4",
      username: "bob",
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob@example.com",
      profilePicture: "https://api.dicebear.com/9.x/thumbs/svg?seed=4",
      createdAt: "2022-04-01T13:00:00Z",
      totalAmountEarned: 6000,
      totalAmountSpent: 2500,
      percentRank: 82,
      isPhoneVerified: false,
    },
    isHidden: false,
    isFeatured: false,
    slug: "create-a-marketing-plan",
    deadline: "2023-10-30T13:00:00Z",
  },
  {
    id: "5",
    title: "Conduct user research",
    content: "Perform user research to gather insights for our new feature.",
    requirements: "Experience with user research and data analysis.",
    tags: ["research", "user"],
    isOpen: true,
    asset: undefined,
    taskSubmissions: [0, 0, 0, 0, 0],
    createdAt: "2023-10-05T14:00:00Z",
    transactionId: "txn_123460",
    user: {
      id: "user_5",
      username: "charlie",
      firstName: "Charlie",
      lastName: "Brown",
      email: "charlie@example.com",
      profilePicture: "https://api.dicebear.com/9.x/thumbs/svg?seed=5",
      createdAt: "2022-05-01T14:00:00Z",
      totalAmountEarned: 9000,
      totalAmountSpent: 5000,
      percentRank: 92,
      isPhoneVerified: true,
    },
    isHidden: false,
    isFeatured: true,
    slug: "conduct-user-research",
    deadline: "2023-11-05T14:00:00Z",
  },
  {
    id: "6",
    title: "Optimize website SEO",
    content: "Improve the SEO of our website to increase organic traffic.",
    requirements: "Knowledge of SEO best practices and tools.",
    tags: ["SEO", "optimization"],
    isOpen: true,
    asset: undefined,
    taskSubmissions: [0, 0, 0, 0],
    createdAt: "2023-10-06T15:00:00Z",
    transactionId: "txn_123461",
    user: {
      id: "user_6",
      username: "dave",
      firstName: "Dave",
      lastName: "Williams",
      email: "dave@example.com",
      profilePicture: "https://api.dicebear.com/9.x/thumbs/svg?seed=6",
      createdAt: "2022-06-01T15:00:00Z",
      totalAmountEarned: 10000,
      totalAmountSpent: 6000,
      percentRank: 95,
      isPhoneVerified: false,
    },
    isHidden: false,
    isFeatured: false,
    slug: "optimize-website-seo",
    deadline: "2023-11-10T15:00:00Z",
  },
  {
    id: "7",
    title: "Develop a chatbot",
    content: "Create a chatbot for customer support using AI technologies.",
    requirements: "Experience with AI and chatbot development.",
    tags: ["AI", "chatbot"],
    isOpen: true,
    asset: undefined,
    taskSubmissions: [0, 0, 0, 0, 0, 0],
    createdAt: "2023-10-07T16:00:00Z",
    transactionId: "txn_123462",
    user: {
      id: "user_7",
      username: "eve",
      firstName: "Eve",
      lastName: "Davis",
      email: "eve@example.com",
      profilePicture: "https://api.dicebear.com/9.x/thumbs/svg?seed=7",
      createdAt: "2022-07-01T16:00:00Z",
      totalAmountEarned: 11000,
      totalAmountSpent: 7000,
      percentRank: 97,
      isPhoneVerified: true,
    },
    isHidden: false,
    isFeatured: true,
    slug: "develop-a-chatbot",
    deadline: "2023-11-15T16:00:00Z",
  },
];
