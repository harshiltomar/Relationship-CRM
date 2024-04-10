import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SidebarMenu from "./components/Sidebar";
import MainPage from "./components/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SidebarMenu />
      </div>
      <div className="col-span-4">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
