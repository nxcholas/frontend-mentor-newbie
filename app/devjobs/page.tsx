"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import data from "@/app/devjobs/data/data.json";
import JobPostsGrid from "./components/JobPostsGrid";

function page() {
  const [title, setTitle] = useState<String>("");
  const [location, setLocation] = useState<String>("");
  const [contract, setContract] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    console.log(contract)
  }, [contract])

    const handleSearch = () => {
    const results = data.filter((job) => {
      const matchesTitle = job.position
        .toLowerCase()
        .includes(title.toLowerCase());

      const matchesLocation = job.location
        .toLowerCase()
        .includes(location.toLowerCase());

      const matchesFullTime =
      !contract || job.contract.toLowerCase() === "full time";

      return matchesTitle && matchesLocation && matchesFullTime;
    });

    setFilteredData(results);
    console.log(results)
  };

  return (
    <main className="w-full h-auto flex flex-col">
      <Header
        setTitle={setTitle}
        setLocation={setLocation}
        contract={contract}
        setContract={setContract}
        searchOnClick={handleSearch}
      />
      <JobPostsGrid filteredData={filteredData}></JobPostsGrid>
    </main>
  );
}

export default page;
