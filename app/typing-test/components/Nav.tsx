"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePersonalBest } from "./PersonalBestContext";

function Nav() {
  const { personalBest } = usePersonalBest();

  return (
    <nav className="w-full flex justify-between items-center sm:mb-8 md:mb-10 lg:mb-16">
      <div className="logo">
        <Image
          src={"/typing-test/logo-large.svg"}
          width={300}
          height={300}
          alt="Logo"
          className="hidden md:block"
        />
                <Image
          src={"/typing-test/logo-small.svg"}
          width={32}
          height={32}
          alt="Logo"
          className="block md:hidden"
        />
      </div>
      <div className="personal-best flex">
        <Image
          src={"/typing-test/icon-personal-best.svg"}
          width={20}
          height={20}
          alt="Personal Best Icon"
        />
        {/* fetch from local stoage here */}
        <h1 className="ml-2 text-typing-test-neutral-400">
          Personal Best:{" "}
          <span className="text-typing-test-neutral-0">{personalBest} WPM</span>
        </h1>
      </div>
    </nav>
  );
}

export default Nav;
