"use client";
import Image from "next/image";
import Link from "next/link";
import ToggleButton from "./ToggleButton";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import data from "@/app/devjobs/data/data.json";
import { useState } from "react";

type headerType = {
  setTitle?: (title: string) => void;
  setLocation?: (location: string) => void;
  contract?: boolean;
  setContract?: React.Dispatch<React.SetStateAction<boolean>>;
  searchOnClick?: () => void;
  jobID?: string;
};

function Header({
  setTitle,
  setLocation,
  contract,
  setContract,
  searchOnClick,
  jobID,
}: headerType) {
  const { dark } = useTheme();
  const job = data.find((j) => j.id === Number(jobID));

  return (
    <header className="w-full h-37.5 bg-[url('/devjobs/bg-pattern-header.svg')] bg-no-repeat bg-cover bg-center flex justify-center relative mb-28">
      <div className="w-full max-w-278 px-8 lg:px-0">
        <div className="flex justify-between items-center h-full">
          <Link href={"/devjobs"}>
            <Image src="/devjobs/logo.svg" width={115} height={32} alt="Logo" />
          </Link>
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

        {jobID !== undefined && job ? (
          <div className="absolute left-1/2 -bottom-35 md:-bottom-28 -translate-x-1/2 w-full max-w-278 h-full px-8 lg:px-0">
            <div
              className={`relative w-full h-full flex flex-col md:flex-row justify-between rounded-md ${dark ? "bg-devjobs-slate-900" : "bg-neutral-0"}`}
            >
              {/* job info here */}
              <div
                style={{
                  backgroundColor: data[Number(jobID) - 1].logoBackground,
                }}
                className={`absolute md:static left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 -top-8 job-logo w-15 h-15 md:min-w-40 md:h-full rounded-2xl px-2 md:p-0 md:rounded-none flex justify-center items-center`}
              >
                <Image
                  src={job.logo.replace(".", "")}
                  width={80}
                  height={20}
                  alt="Logo"
                />
              </div>
              <div className="md:flex-1 flex flex-col md:flex-row md:justify-between items-center px-0 md:px-10 md:gap-0 gap-10 md:pt-0 pt-10">
                <div className="flex flex-col md:px-10">
                  <h1
                    className={`${dark ? "text-white" : "text-devjobs-slate-900"} font-bold text-2xl`}
                  >
                    {job.company}
                  </h1>
                  <p className="text-devjobs-slate-500 text-[16px]">
                    {job.website.split("/").pop() + ".com"}
                  </p>
                </div>
                <div className="text-devjobs-indigo-500 flex justify-center items-center font-bold">
                  <Link href={job.website}>
                    <p>Company Site</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
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
                  onChange={(e) => setTitle?.(e.target.value)}
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
                  onChange={(e) => {
                    setLocation?.(e.target.value);
                  }}
                  className={`px-2 py-1 w-full placeholder-gray-400 ${dark ? "text-devjobs-slate-100" : "text-devjobs-slate-950"} outline-none focus:outline-none`}
                  type="text"
                  placeholder="Filter by location..."
                ></input>
              </div>
              {/* checkbox */}
              <div className="max-w-1/3 min-w-35 md:w-1/2 p-1 lg:px-4 h-full flex items-center justify-center md:justify-between md:gap-0 lg:gap-20">
                <div className="hidden md:flex gap-x-4">
                  {setContract && (
                    <Checkbox
                      check={contract ?? false}
                      setCheck={setContract}
                    />
                  )}
                  <p
                    className={`font-bold ${dark ? "text-white" : "text-devjobs-slate-900"} text-nowrap`}
                  >
                    Full-Time Only
                  </p>
                </div>
                <div className="hidden lg:block">
                  <Button text={"Search"} onClick={searchOnClick} />
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
                  <Button type="mobile" onClick={searchOnClick} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
