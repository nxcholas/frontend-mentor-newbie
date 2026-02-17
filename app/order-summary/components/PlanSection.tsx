import Image from "next/image";

function PlanSection() {
  return (
    <div className="plan-container w-full h-24.5 flex justify-center items-center mb-8">
      <div className="w-2/3 flex justify-start items-center gap-4">
        <div className="w-12 h-12 shrink-0 flex-none">
          <Image
            src="/order-summary/icon-music.svg"
            width={48}
            height={48}
            alt="Music Icon"
            className="w-12 h-12"
          />
        </div>
        <div className="text-content text-nowrap flex flex-col">
          <h1 className="text-[16px] text-ordersummary-blue-950 font-black">
            Annual Plan
          </h1>
          <p className="text-[16px] text-ordersummary-gray-600 font-medium">
            $59.99/year
          </p>
        </div>
      </div>
      <div className="w-1/3 flex  justify-end items-center ">
        <button className="text-ordersummary-blue-700 hover:text-ordersummary-purple-500 font-bold cursor-pointer">
          Change
        </button>
      </div>
    </div>
  );
}

export default PlanSection;
