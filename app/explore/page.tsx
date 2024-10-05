import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TaskContent } from "./task-content";
import { ServiceContent } from "./service-content";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl py-24 px-4 sm:px-6 grid gap-6">
      <Tabs defaultValue="task" className="flex flex-col overflow-hidden">
        <TabsList className="w-full flex mb-4 justify-start bg-transparent border-b rounded-none p-0 h-auto overflow-auto">
          <TabsTrigger
            value="task"
            className="shrink-0 inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Looking For Work
          </TabsTrigger>
          <TabsTrigger
            value="service"
            className="shrink-0 inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Looking To Hire
          </TabsTrigger>
        </TabsList>
        <TabsContent value="task">
          <TaskContent />
        </TabsContent>
        <TabsContent value="service">
          <ServiceContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
