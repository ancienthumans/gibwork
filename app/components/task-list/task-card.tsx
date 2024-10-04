import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, Stars } from "lucide-react";
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
          "relative p-4 flex gap-4 transition-all hover:ring-2 hover:ring-primary",
          !task.isOpen && "bg-muted"
        )}
      >
        <img
          src={task.user.profilePicture}
          className="size-14 rounded-full bg-muted sm:block hidden border mb-auto"
        />

        <div className="flex flex-col items-start grow">
          <div className="flex items-center">
            <img
              src={task.user.profilePicture}
              className="size-6 rounded-full bg-muted mr-2 sm:hidden border"
            />

            <p className="text-sm">{task.user.username}</p>

            {/* Or add a user.verified field to show the badge only for team members */}
            {task.user.isPhoneVerified && (
              <BadgeCheck className="text-background size-5 fill-primary" />
            )}
          </div>

          <p className="font-semibold sm:text-lg mt-1">{task.title}</p>

          <div className="flex items-center gap-1 mt-1 flex-wrap">
            {task.isFeatured && <Badge className="rounded-[4px]">Featured</Badge>}
            {true && (
              <Badge className="bg-emerald-600 text-emerald-50 border-emerald-600 rounded-[4px]">
                PR Required
              </Badge>
            )}

            {task.tags.map((tag) => (
              <Badge key={task.title + tag} variant={"outline"} className="capitalize">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center mt-4">
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

        <div className="text-right shrink-0 flex flex-col">
          <div className="flex items-center justify-end gap-1">
            <p className="font-bold text-lg sm:text-xl">10K</p>
            <img
              src="https://ipfs.io/ipfs/QmRrXtSRKSjiqaXYdHZVXmNTcoy2FXXR7jPeET97Cu66rx?height=25&width=25&quality=50"
              className="size-6 rounded-full "
            />
          </div>

          <p className="text-sm text-muted-foreground">
            <span className="text-xs">(~$100 USD)</span> 1K left
          </p>

          <p className="text-xs text-right mt-auto text-muted-foreground">Ends in 4 days</p>
        </div>
      </Card>
    </Link>
  );
}
