import React from "react";

type ButtonType = {
  variant: string;
};

function Button({ variant }: ButtonType) {
  return (
    <>
      {variant === "payment" ? (
        <button className="w-full h-12.5 flex items-center justify-center bg-ordersummary-blue-700 text-neutral-light text-[16px] font-black rounded-xl cursor-pointer hover:bg-ordersummary-purple-500">
          Proceed to Payment
        </button>
      ) : (
        <button className="w-full flex items-center justify-center  text-ordersummary-gray-600 font-black rounded-xl cursor-pointer hover:text-ordersummary-blue-950">
          Cancel Order
        </button>
      )}
    </>
  );
}

export default Button;
