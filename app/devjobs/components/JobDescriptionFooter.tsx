"use client";
import data from "@/app/devjobs/data/data.json";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
type JobFooterProps = {
  jobID: string;
};

function JobDescriptionFooter({ jobID }: JobFooterProps) {
  const { dark } = useTheme();
  const job = data.find((j) => j.id === Number(jobID));
  return (
    <footer
      className={`w-screen lg:max-w-278  md:pt-16 pt-8 pb-8 md:px-16 flex ${dark ? "text-white bg-devjobs-slate-900" : "text-devjobs-slate-900"} flex justify-between items-center`}
    >
      <div className="footer-title max-w-278 hidden md:flex flex-col">
        <h1 className="font-bold text-xl">{job?.position}</h1>
        <p className="text-devjobs-slate-500">{job?.company}</p>
      </div>
      <div className="footer-btn w-full md:w-auto">
        <Button text="Apply Now" />
      </div>
    </footer>
  );
}

export default JobDescriptionFooter;
