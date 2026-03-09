import data from "@/app/devjobs/data/data.json";
import JobPostCard from "./JobPostCard";
import Button from "./Button";

function JobPostsGrid() {
  const jobData = data;
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="grid w-full max-w-278 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-7.5 gap-y-10">
        {/* cards here */}
        {jobData.map((job) => (
          <JobPostCard
            key={job.id}
            id={job.id}
            logo={job.logo}
            logoBackground={job.logoBackground}
            postedAt={job.postedAt}
            contract={job.contract}
            position={job.position}
            company={job.company}
            location={job.location}
          />
        ))}
      </div>
      <div className="button-container py-16 flex justify-center items-center">
        <Button text={"Load More"}/>
      </div>
    </section>
  );
}

export default JobPostsGrid;
