"use client";
import data from "@/app/devjobs/data/data.json";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";
import JobDescriptionFooter from "./JobDescriptionFooter";
type JobDescriptionProps = {
  jobID: string;
};

function JobDescription({ jobID }: JobDescriptionProps) {
  const { dark } = useTheme();
  const job = data.find((j) => j.id === Number(jobID));
  return (
    <div className={`w-full pt-32 md:pt-16 px-8 flex flex-col gap-12 justify-center items-center ${dark ? "text-white " : "text-black"}`}>
      <div className={`job rounded-md w-full max-w-278 p-11 ${dark ? "bg-devjobs-slate-900": "bg-white"}`}>
        <div className="flex flex-col md:justify-between md:items-center md:flex-row md:mb-20">
          <div className="job-heading flex flex-col">
            <div className="job-time-contract flex gap-4 text-devjobs-slate-500">
              <p>{job?.postedAt}</p>
              <span>•</span>
              <p>{job?.contract}</p>
            </div>
            <div className="job-position font-bold text-[28px] mb-2">
              <h1>{job?.position}</h1>
            </div>
            <div className="job-location text-devjobs-indigo-500 text-sm font-bold">
              <p>{job?.location}</p>
            </div>
          </div>
          <div className="apply-btn md:mt-0 py-8 ">
            <Button text="Apply Now" />
          </div>
        </div>
        <div className="job-description w-full text-devjobs-slate-500 mb-10">
          <p>{job?.description}</p>
        </div>
        <div className="job-requirements flex flex-col gap-8 mb-10">
          <h1 className="text-xl font-bold">Requirements</h1>
          <p className="text-devjobs-slate-500">{job?.requirements.content}</p>
          <ul className="text-devjobs-slate-500 space-y-4">
            {job?.requirements.items.map((req, idx) => (
              <li className="flex items-start gap-6" key={idx}>
                <span className="w-6 text-devjobs-indigo-500 font-bold text-right text-2xl">
                  •
                </span>
                <p className="flex-1 leading-relaxed">{req}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="job-duties flex flex-col gap-8">
          <h1 className="text-xl font-bold">What You Will Do</h1>
          <p className="text-devjobs-slate-500">{job?.role.content}</p>
          <ul className="text-devjobs-slate-500 space-y-4">
            {job?.role.items.map((req, idx) => (
              <li className="flex items-start gap-6" key={idx}>
                <span className="w-6 text-devjobs-indigo-500 font-bold text-right">
                  {idx + 1}
                </span>
                <p className="flex-1 leading-relaxed">{req}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <JobDescriptionFooter jobID={jobID} />
    </div>
  );
}

export default JobDescription;
