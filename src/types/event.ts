export enum EventStatus {
  done = "done",
  progress = "progress",
}

export type Event = {
  id: number;
  name: string;
  image: string;
  description: string;
  amount: number;
  transactions_s: number;
  transactions_p: number;
  transactions_f: number;
  progress: number;
  status: EventStatus;
  started_at: number;
};
