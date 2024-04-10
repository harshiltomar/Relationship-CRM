import "./App.css";
import SidebarMenu from "./components/Sidebar";
import MainPage from "./components/MainPage";

function Home() {
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

export default Home;
