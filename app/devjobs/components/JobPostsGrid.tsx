"use client";
import data from "@/app/devjobs/data/data.json";
import JobPostCard from "./JobPostCard";
import Button from "./Button";
import Link from "next/link";

type Job = (typeof data)[number];
type JobPostsGridProps = {
  filteredData: Job[];
};

function JobPostsGrid({ filteredData }: JobPostsGridProps) {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      {filteredData.length > 0 ? (
        <>
          <div className="grid w-full max-w-278 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-7.5 gap-y-10 place-items-center px-6.5">
            {filteredData.map((job) => (
              <Link className="w-full" key={job.id} href={`/devjobs/${job.id}`}>
                <JobPostCard
                  id={job.id}
                  logo={job.logo}
                  logoBackground={job.logoBackground}
                  postedAt={job.postedAt}
                  contract={job.contract}
                  position={job.position}
                  company={job.company}
                  location={job.location}
                />
              </Link>
            ))}
          </div>

          <div className="py-16 flex justify-center items-center">
            <Button text={"Load More"} />
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center items-center py-20">
          <div className="w-full max-w-md bg-white dark:bg-devjobs-slate-800 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center space-y-4">
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-devjobs-indigo-100 dark:bg-devjobs-indigo-900">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="text-devjobs-indigo-500"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            {/* Text */}
            <h2 className="text-2xl font-bold text-devjobs-slate-900">
              No Jobs Found
            </h2>

            <p className="text-devjobs-slate-500 dark:text-devjobs-slate-300 text-sm">
              Try adjusting your search filters or check back later for new
              opportunities.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default JobPostsGrid;
