import React, { createContext, useReducer, type Dispatch } from "react";
import type { Action, State } from "../types/NotificationType";
import NotificationReducer from "../reducers/NotificationReducer";

interface NotificationContextInterface {
  state: State;
  dispatch: Dispatch<Action>;
}

const NotificationContext = createContext<NotificationContextInterface | undefined>(undefined);

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(NotificationReducer, [] as State);

  return <NotificationProvider>{children}</NotificationProvider>;
};

const useNotification = () => {
  const context = createContext(NotificationContext);

  if (!context) {
    throw new Error("NotificatoinContextの範囲外です");
  }

  return context;
};

export { NotificationProvider, useNotification };
