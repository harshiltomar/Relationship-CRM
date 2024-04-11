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

  const [profilearr, setProfilearr] = useState([
    {
      name: "Harshil",
      email: "harshil20@gmail.com",
      contact: 9958977078,
      stage: "Prospects",
    },
    {
      name: "Yash",
      email: "yash20@gmail.com",
      contact: 7458977078,
      stage: "Reached Out",
    },
    {
      name: "Shubh",
      email: "shubh20@gmail.com",
      contact: 8358977078,
      stage: "In Conversation",
    },
    {
      name: "Ram",
      email: "ram20@gmail.com",
      contact: 9758977078,
      stage: "On boarded",
    },
    {
      name: "Supriya",
      email: "supriya20@gmail.com",
      contact: 9158977078,
      stage: "Rejected",
    },
  ]);

  const addStage = (newStage) => {
    setStagesarr([...stagesarr, newStage]);
  };

  const addProfile = ({ newProfile }) => {
    setProfilearr([...profilearr, { newProfile }]);
  };

  return (
    <div className="h-screen flex-col ">
      <Header />
      <Actions
        addStage={addStage}
        stagesarr={stagesarr}
        addProfile={addProfile}
        profilearr={profilearr}
      />
      <div className="grid grid-cols-5">
        {stagesarr.map((stage, index) => (
          <StagesCard
            key={index}
            title={stage}
            profilearr={profilearr}
            number={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
