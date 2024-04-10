import React from "react";
import CreatorCard from "./CreatorCard";

const StagesCard = ({ title, number }) => {
  return (
    <div className="pl-1 pr-2a">
      <div className="h-screen bg-gray-100 m-1 rounded-lg">
        <div className="flex justify-between border-b border-gray-300 p-2">
          <h1 className="font-semibold">{title.toUpperCase()} &rarr;</h1>
          <h1 className="text-gray-700">{number}</h1>
        </div>
        <CreatorCard />
      </div>
    </div>
  );
};

export default StagesCard;
