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
      name: "Muskan",
      email: "muskan20@gmail.com",
      contact: 9158977078,
      stage: "Rejected",
    },
  ]);

  const transferStageFn = (transferStage, profileIndex) => {
    const updatedProfile = {
      ...profilearr[profileIndex],
      stage: transferStage,
    };

    // Create a new profilearr array with the updated profile
    const updatedProfileArr = [
      ...profilearr.slice(0, profileIndex),
      updatedProfile,
      ...profilearr.slice(profileIndex + 1),
    ];

    // Update the state with the new profilearr
    setProfilearr(updatedProfileArr);

    // Reset the selectedProfile and transferStage state variables if needed
    setSelectedProfile("");
    setTransferStage("");
  };

  const addStage = (newStage) => {
    setStagesarr([...stagesarr, newStage]);
  };

  const addProfile = (newProfile) => {
    setProfilearr([...profilearr, newProfile]);
  };

  return (
    <div className="h-screen flex-col ">
      <Header />
      <Actions
        addStage={addStage}
        stagesarr={stagesarr}
        addProfile={addProfile}
        profilearr={profilearr}
        transferStageFn={transferStageFn}
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
