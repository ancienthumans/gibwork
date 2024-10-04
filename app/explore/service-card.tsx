import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export function ServiceCard({ service }: { service?: any }) {
  return (
    <Link href={"#"}>
      <Card className="transition-all group hover:ring-2 hover:ring-primary">
        <CardHeader className="p-4">
          <div className="overflow-hidden rounded-sm aspect-video w-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" h-full w-full object-cover group-hover:scale-110 transition-all group-hover:opacity-80"
            />
          </div>
        </CardHeader>

        <CardContent className="p-4 pt-0 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-6 rounded-full"
              />
              <p className="text-sm">Xander</p>
            </div>

            <div className="flex items-center gap-1">
              <img
                src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-4 rounded-full"
              />
              <p className="text-sm font-medium">0.00 Earned</p>
            </div>
          </div>

          <p className="font-semibold">I will create a beat for you in any genre of your choice!</p>

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
