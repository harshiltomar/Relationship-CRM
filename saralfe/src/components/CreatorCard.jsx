import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const CreatorCard = ({ title, profilearr }) => {
  return (
    <>
      {profilearr.map((profile, index) => {
        if (profile.stage === title) {
          return (
            <div
              key={index}
              className="h-[160px] bg-white m-2 rounded-lg border-t-4 border-violet-300 flex-col"
            >
              <div className="flex p-2 border-b-2">
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/110554721?v=4" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="p-2 mx-1">{profile.name}</h1>
              </div>
              <div className="p-2 text-sm text-gray-700">
                <h1 className="py-2">Email: {profile.email}</h1>
                <h1 className="py-2">Contact: {profile.contact}</h1>
              </div>
            </div>
          );
        } else {
          return null; // No match for the stage, don't render anything
        }
      })}
    </>
  );
};

export default CreatorCard;
