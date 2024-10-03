import { TaskCard } from "./task-card";

const sample = [
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
];

export default function Home() {
  return (
    <div className=" max-w-5xl mx-auto w-full flex flex-col gap-2 py-24 px-4">
      {sample.map((item, i) => (
        <TaskCard key={item.title} task={item} />
      ))}
    </div>
  );
}
