"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { ServiceCard } from "./service-card";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export function ServiceContent() {
  const [open, setOpen] = React.useState(false);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [sortBy, setSortBy] = React.useState("featured");

  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Can't Find the Service You Need?</CardTitle>
          <CardDescription>Create your own unique task for others to complete.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Create a Task</Button>
        </CardContent>
      </Card>
      <div className="flex gap-2 flex-wrap">
        <div className="relative grow">
          <Input placeholder="Search service..." className="pl-8" />
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <ServiceCard key={i + "service card"} />
        ))}
      </div>
    </div>
  );
}
