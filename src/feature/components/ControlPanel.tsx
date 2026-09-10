import React from "react";
import { useNotification } from "../contexts/NotificationContext";
import type { NotificationType } from "../types/NotificationType";

const ControlPanel = () => {
  const { dispatch } = useNotification();

  const handleAddNotification = (message: string, nType: NotificationType) => {
    dispatch({ type: "add", message, nType });
  };

  return (
    <div className="w-1/2 flex mx-auto justify-around">
      <button
        onClick={() => handleAddNotification("情報メッセージ", "info")}
        className="bg-gray-500 w-15 text-white rounded-full py-1 cursor-pointer hover:opacity-80"
      >
        Info
      </button>
      <button
        onClick={() => handleAddNotification("成功しました", "success")}
        className="bg-gray-500 w-20 text-white rounded-full py-1 cursor-pointer hover:opacity-80"
      >
        Success
      </button>
      <button
        onClick={() => handleAddNotification("エラーが発生しました", "error")}
        className="bg-gray-500 w-15 text-white rounded-full py-1 cursor-pointer hover:opacity-80"
      >
        Error
      </button>
    </div>
  );
};

export default ControlPanel;
