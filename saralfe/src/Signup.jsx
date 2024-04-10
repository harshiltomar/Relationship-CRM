import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SidebarMenu from "./components/Sidebar";
import MainPage from "./components/MainPage";
import { Input } from "./components/ui/input";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center ">
          <div className="p-12 rounded-lg bg-slate-200">
            <div>
              <div className="flex text-3xl mt-4 text-gray-900 ">
                Get Started with{" "}
                <span className="text-violet-900 font-semibold pl-2">
                  SARAL
                </span>
              </div>
              <div className="text-slate-400">
                The ultimate influncer OS Platform
              </div>
            </div>
            <div className="pt-8">
              <Input
                className="my-2"
                label="Name"
                placeholder="Enter your Name..."
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />

              <Input
                className="my-2"
                label="Email"
                placeholder="Enter your email id..."
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    username: e.target.value,
                  });
                }}
              />
              <Link to="/home">
                <button
                  type="button"
                  className="mt-4 w-full text-white bg-violet-800 hover:bg-violet-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Get Started &rarr;
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-slate-200 ">
        <img
          className="pt-12"
          src="https://assets-global.website-files.com/65ce4e0201655254962ec579/65f8b0d0830242eacf1faf67_ebook-home-p-800.webp"
        ></img>
      </div>
    </div>
  );
};

export default Signup;
