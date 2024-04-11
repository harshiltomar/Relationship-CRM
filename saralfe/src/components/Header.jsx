import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuDemo } from "./DropDownMenu";

const Header = () => {
  return (
    <div className="border-b border-gray-300 flex justify-between px-6 py-6">
      <h1 className="text-2xl font-semibold">Relationships</h1>
      <div className="flex">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-2 bg-slate-200">
          <DropdownMenuDemo />
        </div>
      </div>
    </div>
  );
};

export default Header;
