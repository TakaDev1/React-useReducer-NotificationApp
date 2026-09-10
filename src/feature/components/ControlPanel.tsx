import React from "react";
import { useNotification } from "../contexts/NotificationContext";
import type { NotificationType } from "../types/NotificationType";

const ControlPanel = () => {
  const { dispatch } = useNotification();

  const handleAddNotification = (message: string, nType: NotificationType) => {
    dispatch({ type: "add", message, nType });
  };

  return (
    <div>
      <button onClick={() => handleAddNotification("情報メッセージ", "info")}>Info</button>
      <button onClick={() => handleAddNotification("成功しました", "success")}>Success</button>
      <button onClick={() => handleAddNotification("エラーが発生しました", "error")}>Error</button>
    </div>
  );
};

export default ControlPanel;
