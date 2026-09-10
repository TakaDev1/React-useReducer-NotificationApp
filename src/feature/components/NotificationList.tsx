import React from "react";
import { useNotification } from "../contexts/NotificationContext";

const NotificationList = () => {
  const { state, dispatch } = useNotification();

  const colorMap = {
    info: "bg-blue-800 text-blue-800",
    success: "bg-green-800 text-green-800",
    error: "bg-red-800 text-red-800",
  };

  const handleRemove = (id: string) => {
    dispatch({ type: "remove", id });
  };

  return (
    <div className="my-10">
      {state.length > 0 ? (
        <ul>
          {state.map((notification) => (
            <li
              key={notification.id}
              className={`text-white w-1/3 mx-auto py-3 rounded-xl flex items-center justify-around ${colorMap[notification.type]} my-5`}
            >
              {notification.message}{" "}
              <button
                onClick={() => handleRemove(notification.id)}
                className="bg-red-700 w-15 py-1 cursor-pointer hover:opacity-80 rounded-full"
              >
                ×
              </button>{" "}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">通知がありません</p>
      )}
    </div>
  );
};

export default NotificationList;
