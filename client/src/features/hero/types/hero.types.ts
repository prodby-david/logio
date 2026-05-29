export type StatItem = {
  label: string;
  value: string;
}

export type TimeLog = {
  id: string;
  date: string;
  hours: number;
  task: string;
  status: "approved" | "pending";
}
