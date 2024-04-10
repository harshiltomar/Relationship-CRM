import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SidebarMenu from "./components/Sidebar";
import MainPage from "./components/MainPage";
import { Input } from "./components/ui/input";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
