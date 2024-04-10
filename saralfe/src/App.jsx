import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SidebarMenu from "./components/Sidebar";
import MainPage from "./components/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <SidebarMenu />
      </div>
      <div className="col-span-10">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
