"use client";
import Image from "next/image";
import { useState } from "react";

const CardProps = {
  heading: "Stay Updated!",
  subtext: "Join 60,000+ product managers receiving monthly updates on:",
  listItems: [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ],
};

function SignUpCard() {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>();

  const isValid = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsValidEmail(null);
    // check if valid email
    if (!isValid(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };
  return (
    <>
      {/* email not submitted */}
      {!isValidEmail ? (
        <div className="w-full p-0 md:max-w-152 md:p-10 lg:p-8 lg:max-w-226 bg-newsletter-signup-white text-newsletter-signup-blue-800 flex  lg:flex-row rounded-4xl gap-x-16 flex-col-reverse">
          {/* content container */}
          <div className="w-full lg:w-1/2 flex flex-col gap-y-8 justify-center px-6 py-12 md:p-0">
            <div className="heading flex flex-col gap-4">
              <h1 className="font-bold text-[56px]">{CardProps.heading}</h1>
              <h2>{CardProps.subtext}</h2>
            </div>
            <ul className="list flex flex-col gap-y-3">
              {CardProps.listItems.map((item) => (
                <div key={item} className="flex gap-x-3">
                  <Image
                    src={"/newsletter-signup/icon-list.svg"}
                    width={21}
                    height={21}
                    alt="List Icon"
                  />
                  <p>{item}</p>
                </div>
              ))}
            </ul>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="input-container flex flex-col w-full"
            >
              <label
                className="w-full text-[12px] mb-2 font-bold flex justify-between"
                htmlFor="email"
              >
                <p>Email Address</p>
                {isValidEmail === false && (
                  <p className="text-newsletter-signup-red">
                    Valid email required
                  </p>
                )}
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`py-4 px-6 w-full ${isValidEmail === false ? "border border-newsletter-signup-red" : "border border-newsletter-signup-grey"}  rounded-lg mb-6`}
                name="email"
                type="email"
                placeholder="email@company.com"
              />
              <button className="py-4 px-8 text-newsletter-signup-white bg-newsletter-signup-blue-800 font-bold tracking-wider rounded-lg text-center cursor-pointer hover:bg-newsletter-signup-blue-700">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          {/* img container */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="img-desktop hidden lg:block">
              <Image
                src={"/newsletter-signup/illustration-sign-up-desktop.svg"}
                width={500}
                height={600}
                className="w-full h-full object-contain"
                alt="Image"
              />
            </div>
            <div className="img-tablet hidden md:block lg:hidden">
              <Image
                src={"/newsletter-signup/illustration-sign-up-tablet.svg"}
                width={500}
                height={600}
                className="w-full h-full object-contain"
                alt="Image"
              />
            </div>
            <div className="img-mobile block md:hidden">
              <Image
                src={"/newsletter-signup/illustration-sign-up-mobile.svg"}
                width={500}
                height={600}
                className="w-full h-full object-contain"
                alt="Image"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="success w-full h-full justify-between pt-40 pb-16 px-6 md:p-16 md:h-auto md:w-126 flex flex-col gap-y-8 bg-newsletter-signup-white md:rounded-4xl">
          <div className="success-heading w-full">
            <Image
              src={"/newsletter-signup/icon-success.svg"}
              width={64}
              height={64}
              alt="Sucess Icon"
            />
            <h1 className="text-[56px] text-newsletter-signup-blue-800 font-bold">
              Thanks for subscribing!
            </h1>
            <p>
              A confirmation email has been sent to{" "}
              <span className="font-bold">{email}</span>. Please open it and
              click the button inside to confirm your subscription.
            </p>
          </div>
          <div className="success-btn-reset">
            <button
              onClick={() => setIsValidEmail(null)}
              className="w-full bg-newsletter-signup-blue-800 text-newsletter-signup-white font-bold tracking-wider px-8 py-4 rounded-lg hover:bg-newsletter-signup-blue-700 cursor-pointer"
            >
              Dismiss Message
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUpCard;
