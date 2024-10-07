import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, Sparkle, Star, Stars } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Task {
  id: string;
  title: string;
  content: string;
  requirements: string;
  tags: string[];
  isOpen: boolean;
  createdAt: string;
  transactionId: string;
  user: User;
  asset: any;
  // asset: Asset;
  isHidden: boolean;
  isFeatured: boolean;
  taskSubmissions: any[];
  // taskSubmissions: TaskSubmission[];
  slug: string;
  deadline: string;
}

interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  createdAt: string;
  totalAmountEarned: number;
  totalAmountSpent: number;
  percentRank: number;
  isPhoneVerified: boolean;
}

export function TaskCard({ task }: { task: Task }) {
  return (
    <Link href={"#"}>
      <Card
        className={cn(
          "relative sm:p-4 p-3 flex gap-4 transition-all hover:ring-2 hover:ring-primary overflow-hidden",
          !task.isOpen && "bg-muted"
        )}
      >
        {task.isFeatured && (
          <div className="absolute border-2 border-card border-t-0 top-0 right-3 sm:right-4 sm:size-10 size-8 bg-primary flex items-center justify-center text-primary-foreground rounded-b-md">
            <Stars className="sm:size-6 size-5 fill-primary-foreground" />
          </div>
        )}

        <img
          src={task.user.profilePicture}
          className="size-14 rounded-full bg-muted sm:block hidden border mb-auto"
        />

        <div className="flex sm:flex-row flex-col grow">
          <div className="flex flex-col grow">
            <div className="flex items-center">
              <img
                src={task.user.profilePicture}
                className="size-6 rounded-full bg-muted sm:hidden border mr-1"
              />

              <p className="text-sm mr-1 text-muted-foreground">@{task.user.username}</p>

              {task.user.isPhoneVerified && (
                <BadgeCheck className="text-background size-5 fill-primary shrink-0" />
              )}
            </div>

            <p className="font-semibold sm:text-lg">{task.title}</p>

            <div className="flex items-center gap-1 flex-wrap mt-2">
              {/* {true && (
                <Badge className="bg-emerald-600 text-emerald-50 border-emerald-600">
                  PR Required
                </Badge>
              )} */}

              <Badge variant={"outline"} className="capitalize">
                Social Media
              </Badge>
            </div>

            <div className="flex items-center mt-3">
              {task.taskSubmissions.slice(0, 4).map((submission, i) => (
                <img
                  key={i + "participant"}
                  src={"https://api.dicebear.com/9.x/thumbs/svg?seed=1"}
                  className={cn("size-4 rounded-full bg-muted", i !== 0 && "-ml-1")}
                />
              ))}

              <p className="text-xs text-muted-foreground ml-1">
                {task.taskSubmissions.length > 4 && `+${task.taskSubmissions.length - 4}`}{" "}
                participated
              </p>
            </div>
          </div>

          <div className="shrink-0 flex flex-row sm:flex-col justify-between items-end gap-1 border-t sm:border-t-0 mt-3 pt-3">
            <div className="flex items-start sm:items-end flex-col mt-auto">
              <div className="flex items-center gap-1">
                <p className="font-bold text-xl sm:text-2xl">10K</p>
                <img
                  src="https://ipfs.io/ipfs/QmRrXtSRKSjiqaXYdHZVXmNTcoy2FXXR7jPeET97Cu66rx?height=25&width=25&quality=50"
                  className="size-5 sm:size-6 rounded-full "
                />
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground text-right">
                <span>(~$1K USD)</span> 1K left
              </p>
            </div>

            <p className="text-xs text-muted-foreground">Ends in 4 days</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
