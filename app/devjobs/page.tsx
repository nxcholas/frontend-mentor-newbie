import React from "react";
import Header from "./components/Header";
import JobPostsGrid from "./components/JobPostsGrid";

function page() {
  return (
    <main className="w-full h-auto flex flex-col">
      <Header />
      <JobPostsGrid></JobPostsGrid>
    </main>
  );
}

export default page;
