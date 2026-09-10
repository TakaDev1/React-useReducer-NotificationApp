type NotificationType = "info" | "error" | "success";

interface Notification {
  id: string;
  message: string;
  type: NotificationType;
}

type State = Notification[];

type Action =
  | { type: "add"; message: string; nType: NotificationType }
  | { type: "remove"; id: string };

export type { Notification, State, Action };
