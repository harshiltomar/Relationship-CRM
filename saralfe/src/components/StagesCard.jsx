import React from "react";
import CreatorCard from "./CreatorCard";

const StagesCard = ({ title, number, profilearr }) => {
  return (
    <div className="pl-1 pr-1">
      <div className="h-screen bg-gray-100 m-1 rounded-lg">
        <div className="flex justify-between border-b border-gray-300 p-2">
          <h1 className="font-semibold text-sm">
            {title.toUpperCase()} &rarr;
          </h1>
          <h1 className="text-gray-700 text-sm">{number}</h1>
        </div>
        <CreatorCard title={title} profilearr={profilearr} />
      </div>
    </div>
  );
};

export default StagesCard;
