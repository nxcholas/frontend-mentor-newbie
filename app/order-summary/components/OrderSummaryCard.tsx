import React from "react";
import Button from "./Button";
import PlanSection from "./PlanSection";
import Image from "next/image";

function OrderSummaryCard() {
  return (
    <div className="min-w-full bg-neutral-light md:min-w-112.5 md:max-w-112.5 rounded-2xl shadow-[0_40px_40px_-20px_rgba(13,48,189,0.1518)]">
      <Image
        src={"/order-summary/illustration-hero.svg"}
        width={450}
        height={220}
        className="rounded-t-2xl w-full"
        alt="hero"
      />
      <div className="w-full p-4 md:p-12">
        <div className="heading w-full flex flex-col text-center mb-4">
          <h1 className="text-[28px] text-ordersummary-blue-950 font-black mb-4">
            Order Summary
          </h1>
          <p className="text-[16px] text-ordersummary-gray-600">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <PlanSection />
        <div className="button-container w-full h-27 flex flex-col justify-between items-center">
          <Button variant="payment" />
          <Button variant="cancel" />
        </div>
      </div>
    </div>
  );
}

export default OrderSummaryCard;
