import "./App.css";
import ControlPanel from "./feature/components/ControlPanel";
import NotificationList from "./feature/components/NotificationList";
import { NotificationProvider } from "./feature/contexts/NotificationContext";

function App() {
  return (
    <div>
      <NotificationProvider>
        <div>
          <NotificationList />
          <ControlPanel />
        </div>
      </NotificationProvider>
    </div>
  );
}

export default App;
