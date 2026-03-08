"use client";

import { useTheme } from "../context/ThemeContext";
function ToggleButton() {
  const { dark, toggle } = useTheme();
  return (
    <>
      <button
        onClick={toggle}
        className="w-12 h-6 bg-white rounded-full flex items-center px-1 transition-colors cursor-pointer"
      >
        <div
          className={`
          w-4 h-4 rounded-full bg-devjobs-indigo-500
          transform transition-transform duration-300
          ${dark ? "translate-x-6" : "translate-x-0"}
        `}
        />
      </button>
    </>
  );
}

export default ToggleButton;
