"use client";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

type JobPostCardType = {
  id: Number;
  logo: any;
  logoBackground: any;
  postedAt: String;
  contract: String;
  position: String;
  company: String;
  location: String;
};

function JobPostCard({
  id,
  logo,
  logoBackground,
  postedAt,
  contract,
  position,
  company,
  location,
}: JobPostCardType) {
  const { dark } = useTheme();
  return (
    <div className={`group relative job-post-card w-full rounded-md pl-8 py-8 flex flex-col justify-center items-left cursor-pointer ${dark ? "bg-devjobs-slate-900" : "shadow-md"}`}>
      <div
        className={`job-logo absolute top-0 -translate-y-1/2 w-12.5 h-12.5 rounded-2xl flex justify-center items-center mb-6`}
        style={{ backgroundColor: logoBackground }}
      >
        <Image
          src={logo}
          width={40}
          height={20}
          alt="Company Logo"
          className="p-1"
        />
      </div>
      <div className="time-contact flex gap-2 text-devjobs-slate-500 mb-2">
        <p className="">{postedAt}</p>
        <span>•</span>
        <p>{contract}</p>
      </div>
      <div
        className={`group-hover:text-devjobs-slate-500 job-title ${dark ? "text-white" : "text-devjobs-slate-900"} font-bold text-xl mb-4`}
      >
        <p>{position}</p>
      </div>
      <div className="company-name text-devjobs-slate-500 mb-8">
        <p>{company}</p>
      </div>
      <div className="job-location text-devjobs-indigo-500 text-sm font-bold">
        <p>{location}</p>
      </div>
    </div>
  );
}

export default JobPostCard;
