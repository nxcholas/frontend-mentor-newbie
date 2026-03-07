import React from "react";

type CTAButtonType = {
  text: String;
};

function CTAButton({ text }: CTAButtonType) {
  return (
    <button className="w-46.25 max-h-8 text-center tracking-widest cursor-pointer bg-news-homepage-red-500 py-6 px-2 text-very-dark-blue hover:bg-news-homepage-very-dark-blue hover:text-white flex justify-center items-center">
      {text}
    </button>
  );
}

export default CTAButton;
