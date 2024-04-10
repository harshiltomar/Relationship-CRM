import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const CreatorCard = () => {
  return (
    <>
      <div className="h-[160px] bg-white m-2 rounded-lg border-t-4 border-violet-300 flex-col">
        <div className="flex p-2 border-b-2">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/110554721?v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="p-2 mx-1">N/A</h1>
        </div>
        <div className="p-2 text-sm text-gray-700">
          <h1 className="py-2">Email: harshil20@gmail</h1>
          <h1 className="py-2">Contact: +91-99589XXXXX</h1>
        </div>
      </div>
    </>
  );
};

export default CreatorCard;
