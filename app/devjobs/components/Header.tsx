"use client";
import Image from "next/image";
import SearchIcon from "@/public/devjobs/icon-search.svg";
import ToggleButton from "./ToggleButton";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { useState } from "react";

function Header() {
  const [check, setCheck] = useState<boolean>(false);
  const { dark } = useTheme();
  return (
    <header className="w-full h-37.5 bg-[url('/devjobs/bg-pattern-header.svg')] bg-no-repeat bg-cover bg-center flex justify-center relative mb-28">
      <div className="w-full max-w-278 px-8 lg:px-0">
        <div className="flex justify-between items-center h-full">
          <Image src="/devjobs/logo.svg" width={115} height={32} alt="Logo" />
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/devjobs/icon-sun.svg"
              width={20}
              height={20}
              alt="Search"
              className="h-5 w-auto"
            />
            <ToggleButton />
            <Image
              src="/devjobs/icon-moon.svg"
              width={20}
              height={20}
              alt="Search"
              className="h-4 w-auto"
            />
          </div>
        </div>

        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-full max-w-278 px-8 lg:px-0">
          <div
            className={`w-full h-20 flex justify-between rounded-md shadow-md ${dark ? "bg-devjobs-slate-900" : "bg-neutral-0"}`}
          >
            <div className="md:w-1/3 px-4 h-full flex flex-1 gap-2 justify-left items-center md:border-r border-gray-400 pr-4">
              <Image
                src="/devjobs/icon-search.svg"
                width={20}
                height={20}
                alt="Search"
                className="h-5 w-auto"
              />
              <input
                className={`px-2 py-1 w-full placeholder-gray-400 ${dark ? "text-devjobs-slate-100" : "text-devjobs-slate-950"} outline-none focus:outline-none`}
                type="text"
                placeholder="Filter by title, companies, expertise..."
              ></input>
            </div>
            {/* location input */}
            <div className="hidden md:flex w-1/3 px-4 h-full gap-2 justify-left items-center border-r border-gray-400 pr-4">
              <Image
                src="/devjobs/icon-location.svg"
                width={20}
                height={20}
                alt="Search"
                className="h-5 w-auto"
              />
              <input
                className={`px-2 py-1 w-full placeholder-gray-400 ${dark ? "text-devjobs-slate-100" : "text-devjobs-slate-950"} outline-none focus:outline-none`}
                type="text"
                placeholder="Filter by location..."
              ></input>
            </div>
            {/* checkbox */}
            <div className="max-w-1/3 min-w-35 md:w-1/2 p-1 lg:px-4 h-full flex items-center justify-center md:justify-between md:gap-0 lg:gap-20">
              <div className="hidden md:flex gap-x-4">
                <Checkbox check={check} setCheck={setCheck} />
                <p
                  className={`font-bold ${dark ? "text-white" : "text-devjobs-slate-900"} text-nowrap`}
                >
                  Full-Time Only
                </p>
              </div>
              <div className="hidden lg:block">
                <Button text={"Search"} onClick={() => {}} />
              </div>
              <div className="filter-icon md:hidden flex justify-center items-center gap-6">
                <Image
                  src="/devjobs/icon-filter.svg"
                  width={16}
                  height={16}
                  alt="Search"
                  className="h-5 w-auto"
                />
              </div>
              <div className="block ml-4 lg:hidden">
                <Button type="mobile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
