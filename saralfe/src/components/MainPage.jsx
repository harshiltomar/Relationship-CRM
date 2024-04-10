import React from "react";
import Header from "./Header";
import { Actions } from "./Actions";
import StagesCard from "./StagesCard";

const MainPage = () => {
  return (
    <div className="h-screen flex-col ">
      <Header />
      <Actions />
      <div className="grid grid-cols-5">
        <StagesCard title="Prospects" number="560" />
        <StagesCard title="Reached Out" number="217" />
        <StagesCard title="In Conversation" number="49" />
        <StagesCard title="On boarded" number="50" />
        <StagesCard title="Rejected" number="24" />
      </div>
    </div>
  );
};

export default MainPage;
