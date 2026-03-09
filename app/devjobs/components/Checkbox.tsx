"use client";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

type CheckboxProps = {
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

function Checkbox({ check, setCheck }: CheckboxProps) {
  const { dark } = useTheme();

  return (
    <button
      onClick={() => setCheck(!check)}
      className={`
        min-w-6 min-h-6 rounded-sm flex items-center justify-center
        transition-colors cursor-pointer
        ${
          check
            ? "bg-devjobs-indigo-500"
            : dark
              ? "bg-gray-600 hover:bg-devjobs-indigo-500"
              : "bg-gray-200 hover:bg-devjobs-indigo-500"
        }
      `}
    >
      {check && (
        <Image
          src="/devjobs/icon-check.svg"
          width={16}
          height={16}
          alt="Checked"
        />
      )}
    </button>
  );
}

export default Checkbox;
