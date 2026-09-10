import "./App.css";
import { NotificationProvider } from "./feature/contexts/NotificationContext";

function App() {
  return (
    <div>
      <NotificationProvider>
        <div></div>
      </NotificationProvider>
    </div>
  );
}

export default App;
