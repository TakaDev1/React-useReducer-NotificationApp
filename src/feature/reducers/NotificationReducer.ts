import type { Action, State } from "../types/NotificationType";
import { v4 as uuidv4 } from "uuid";

const NotificationReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return [...state, { id: uuidv4(), message: action.message, type: action.nType }];

    case "remove":
      return state.filter((notification) => notification.id !== action.id);
  }
};

export default NotificationReducer;
