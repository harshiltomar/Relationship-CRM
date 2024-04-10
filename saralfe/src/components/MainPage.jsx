import React, { useState } from "react";
import Header from "./Header";
import { Actions } from "./Actions";
import StagesCard from "./StagesCard";

const MainPage = () => {
  const [stagesarr, setStagesarr] = useState([
    "Prospects",
    "Reached Out",
    "In Conversation",
    "On boarded",
    "Rejected",
  ]);

  const addStage = (newStage) => {
    setStagesarr([...stagesarr, newStage]);
  };

  return (
    <div className="h-screen flex-col ">
      <Header />
      <Actions addStage={addStage} />
      <div className="grid grid-cols-5">
        {stagesarr.map((stage, index) => (
          <StagesCard key={index} title={stage} number={index * 100} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
