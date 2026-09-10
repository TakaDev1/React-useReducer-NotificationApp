import React from "react";
import { useNotification } from "../contexts/NotificationContext";

const NotificationList = () => {
  const { state, dispatch } = useNotification();

  const clorMap = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
  };

  const handleRemove = (id: string) => {
    dispatch({ type: "remove", id });
  };

  return (
    <div>
      {state.length > 0 ? (
        <ul>
          {state.map((notification) => (
            <li key={notification.id}>
              {notification.message}{" "}
              <button onClick={() => handleRemove(notification.id)}>×</button>{" "}
            </li>
          ))}
        </ul>
      ) : (
        <p>通知がありません</p>
      )}
    </div>
  );
};

export default NotificationList;
