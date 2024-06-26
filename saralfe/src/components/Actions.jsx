"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { ComboboxDemo } from "./Combobox";

function Actions({
  addStage,
  stagesarr,
  profilearr,
  addProfile,
  transferStageFn,
}) {
  const [stageName, setStageName] = useState("");
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  //POSTING CODE:
  const [stageInput, setStageInputs] = useState({ name: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedStage, setSelectedStage] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("");
  const [transferStage, setTransferStage] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpen2 = () => {
    setOpen2(!open2);
  };

  const handleAddStage = () => {
    if (stagesarr.length >= 10) {
      alert("Stage limit is 5 only");
      return;
    }

    addStage(stageName);
    setStageName("");

    submitStage(stageName);
    console.log(stageName);
  };

  const handleProfileTransfer = () => {
    if (!selectedProfile || !transferStage) {
      console.error("Selected profile or transfer stage is missing");
      return;
    }

    // Find the index of the selected profile in the profilearr array
    const profileIndex = profilearr.findIndex(
      (profile) => profile.name === selectedProfile
    );

    transferStageFn(transferStage, profileIndex);
  };

  const handleProfileSubmit = () => {
    addProfile({
      name: name,
      email: email,
      contact: phone,
      stage: selectedStage,
    });

    //
    console.log("Profile vai");
    console.log("Info is", name, email, phone, selectedStage);
    console.log(profilearr);
  };

  // POST PROFILE
  const submitProfile = async () => {
    if (!Inputs.name || !Inputs.email || !Inputs.phone) {
      alert("Please fill in all the fields");
    }

    try {
      await axios
        .post("http:localhost:3000/api/profile/create", {
          name: Inputs.name,
          email: Inputs.email,
          phone: Inputs.phone,
          stage: {
            /*NEED TO FIGURE OUT */
          },
        })
        .then((response) => {
          console.log(response);
        })
        .then(renderCard());
    } catch (error) {
      console.error("User not created", error);
    }
  };

  // POST STAGE
  const submitStage = async () => {
    if (stageInput.name === "") {
      //alert("Stage Name is Missing");
    }

    try {
      await axios
        .post("http:localhost:3000/api/stage/create", {
          name: Inputs.name,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error("Error in Stage Creation");
    }
  };

  return (
    <div className="p-2 bg-gray-100 m-2 rounded-lg">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>New Stages</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Stages
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Stages allow you to created more personalization for
                        your clients helping you grow more.
                        <p className="text-xs text-red-400">
                          * You can create upto 5 categories
                        </p>
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <div>
                  <h1 className="font-semibold">Enter Details</h1>
                  <Input
                    type="string"
                    placeholder="Stage Name"
                    className="mt-4"
                    value={stageName}
                    onChange={(e) => setStageName(e.target.value)}
                  />
                  <button
                    onClick={handleAddStage}
                    className="w-full bg-black text-white p-2 mt-4 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Add New Profile</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        New User
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        New Profile allow you to add in Profiles of your clients
                        <p className="text-xs text-red-400">
                          * Upto 100 users allowed on Free Tier
                        </p>
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <div>
                  <h1 className="font-semibold">Enter Details</h1>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    type="string"
                    placeholder="Full Name"
                    className="mt-4"
                  />
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="mt-4"
                  />
                  <Input
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    placeholder="Phone Number"
                    className="mt-4"
                  />
                  <button
                    className="border-2 p-2 mt-4 rounded-lg w-full"
                    onClick={handleOpen}
                  >
                    Select Stage
                    {open ? (
                      <ul className="grid gap-3 p-6 ">
                        {stagesarr.map((stage, index) => (
                          <li key={index}>
                            <button
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={() => {
                                // Handle the selection of the stage here
                                console.log("Selected stage:", stage);
                                setSelectedStage(stage);
                              }}
                            >
                              <div className="text-sm font-medium flex-col">
                                {stage}
                              </div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </button>
                  <button
                    onClick={handleProfileSubmit}
                    className="w-full bg-black text-white p-2 mt-4 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* TRANSFER STAGE */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Transfer</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        New User
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        New Profile allow you to add in Profiles of your clients
                        <p className="text-xs text-red-400">
                          * Upto 100 users allowed on Free Tier
                        </p>
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <div>
                  <h1 className="font-semibold">Enter Details</h1>
                  <button
                    className="border-2 p-2 mt-4 rounded-lg w-full"
                    onClick={handleOpen}
                  >
                    Select Profile
                    {open ? (
                      <ul className="grid gap-3 p-6 ">
                        {profilearr.map((profile) => (
                          <li>
                            <button
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={() => {
                                // Handle the selection of the stage here
                                console.log("Selected profile", profile.name);
                                setSelectedProfile(profile.name);
                              }}
                            >
                              <div className="text-sm font-medium flex-col">
                                {profile.name}
                              </div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </button>
                  <button
                    className="border-2 p-2 mt-4 rounded-lg w-full"
                    onClick={handleOpen2}
                  >
                    Select Transfer Stage
                    {open2 ? (
                      <ul className="grid gap-3 p-6 ">
                        {stagesarr.map((stage, index) => (
                          <li key={index}>
                            <button
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={() => {
                                // Handle the selection of the stage here
                                console.log("Selected stage:", stage);
                                setTransferStage(stage);
                              }}
                            >
                              <div className="text-sm font-medium flex-col">
                                {stage}
                              </div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </button>
                  <button
                    onClick={handleProfileTransfer}
                    className="w-full bg-black text-white p-2 mt-4 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export { Actions };
