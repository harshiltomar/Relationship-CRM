import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="border-b border-gray-300 flex justify-between px-6 py-6">
      <h1 className="text-2xl font-semibold">Relationships</h1>
      <div className="flex">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="p-2 bg-gray-300 rounded-lg mx-1">Harshil &rarr;</h1>
      </div>
    </div>
  );
};

export default Header;
