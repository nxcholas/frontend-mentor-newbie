"use server"
import Header from "../components/Header";
import JobDescription from "../components/JobDescription";
import JobDescriptionFooter from "../components/JobDescriptionFooter";

type pageProps = {
  params: {
    id: string;
  };
};

async function Page({ params }: pageProps) {
  const { id } = await params;
  return (
    <>
      <Header
        jobID={id}
      />
      <JobDescription jobID={id} />
    </>
  );
}

export default Page;
