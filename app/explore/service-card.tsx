import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Stars } from "lucide-react";
import Link from "next/link";

export function ServiceCard({ service }: { service?: any }) {
  return (
    <Link href={"#"}>
      <Card className="transition-all group hover:ring-2 hover:ring-primary relative overflow-hidden">
        <div className="absolute top-0 left-3 sm:left-4 border-white border-t-0 border-2 z-10 size-8 sm:size-10 bg-primary flex items-center justify-center text-primary-foreground rounded-b-md">
          <Stars className="size-5 sm:size-6 fill-primary-foreground" />
        </div>
        <CardHeader className="p-0">
          <div className="overflow-hidden aspect-video w-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" h-full w-full object-cover group-hover:scale-110 transition-all group-hover:opacity-80"
            />
          </div>
        </CardHeader>

        <CardContent className="p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-6 rounded-full"
              />
              <p className="text-sm text-muted-foreground">@Xander</p>
            </div>

            <div className="flex items-center gap-1">
              <img
                src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-4 rounded-full"
              />
              <p className="text-sm font-medium">0.00 Earned</p>
            </div>
          </div>

          <p className="font-semibold sm:text-lg text-base">
            I will create a beat for you in any genre of your choice!
          </p>

          <div>
            <p className="text-sm">0 Order</p>
          </div>

          <div className="flex items-center gap-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="size-4 rounded-full"
            />
            <p className="font-semibold">
              1.00 SOL <span className="text-muted-foreground font-normal text-sm">/ request</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
