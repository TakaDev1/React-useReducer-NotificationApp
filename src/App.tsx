import "./App.css";
import ControlPanel from "./feature/components/ControlPanel";
import NotificationList from "./feature/components/NotificationList";
import { NotificationProvider } from "./feature/contexts/NotificationContext";

function App() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
      <h1>React-useReducer-NotificationApp</h1>
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
