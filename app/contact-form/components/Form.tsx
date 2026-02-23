"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import SuccessToast from "./SuccessToast";

function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }

    toast.custom(<SuccessToast />, {
      duration: 4000,
    });

    e.currentTarget.reset();
  };

  return (
    <>
      {/* You can place this here, or ideally once at app root (see notes below) */}
      <Toaster position="top-center" />

      <form
        onSubmit={handleSubmit}
        className="lg:max-w-184 w-full flex flex-col p-10 bg-white rounded-2xl"
      >
        <div className="heading w-full mb-8">
          <h1 className="font-bold text-3xl tracking-tighter">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-4 gap-y-6">
          <div className="form-control md:col-span-1 flex flex-col">
            <label htmlFor="fname">
              First Name <span>*</span>
            </label>
            <input
              id="fname"
              name="fname"
              type="text"
              required
              className="border border-contact-form-grey-500 rounded-lg py-3 px-2 text-lg focus:outline-none focus:border-contact-form-green-600"
            />
          </div>

          <div className="form-control md:col-span-1 flex flex-col">
            <label htmlFor="lname">
              Last Name <span>*</span>
            </label>
            <input
              id="lname"
              name="lname"
              type="text"
              required
              className="border border-contact-form-grey-500 rounded-lg py-3 px-2 text-lg focus:outline-none focus:border-contact-form-green-600"
            />
          </div>

          <div className="form-control md:col-span-2 flex flex-col">
            <label htmlFor="email">
              Email Address<span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="border border-contact-form-grey-500 rounded-lg py-3 px-2 text-lg focus:outline-none focus:border-contact-form-green-600"
            />
          </div>

          <div className="form-control md:col-span-1 flex flex-col">
            <span>
              Query Type <span>*</span>
            </span>

            <label className="cursor-pointer">
              <input
                type="radio"
                name="queryType"
                value="generalEnquiry"
                required
                className="peer sr-only"
              />

              <div className="flex items-center gap-3 border border-contact-form-grey-500 rounded-lg px-6 py-3 transition-all duration-200 peer-checked:bg-(--contact-form-green-200) peer-checked:border-(--contact-form-green-600) peer-checked:[&_.radio]:border-(--contact-form-green-600) peer-checked:[&_.dot]:scale-100">
                <div className="radio w-5 h-5 rounded-full border-2 border-contact-form-grey-500 flex items-center justify-center">
                  <div className="dot w-2.5 h-2.5 rounded-full bg-(--contact-form-green-600) scale-0 transition-transform duration-200"></div>
                </div>
                <span>General Enquiry</span>
              </div>
            </label>
          </div>

          <div className="form-control md:col-span-1 flex flex-col">
            <div className="invisible">Support Request</div>

            <label className="cursor-pointer">
              <input
                type="radio"
                name="queryType"
                value="supportRequest"
                required
                className="peer sr-only"
              />

              <div className="flex items-center gap-3 border border-contact-form-grey-500 rounded-lg px-6 py-3 transition-all duration-200 peer-checked:bg-(--contact-form-green-200) peer-checked:border-(--contact-form-green-600) peer-checked:[&_.radio]:border-(--contact-form-green-600) peer-checked:[&_.dot]:scale-100">
                <div className="radio w-5 h-5 rounded-full border-2 border-contact-form-grey-500 flex items-center justify-center">
                  <div className="dot w-2.5 h-2.5 rounded-full bg-(--contact-form-green-600) scale-0 transition-transform duration-200"></div>
                </div>
                <span>Support Request</span>
              </div>
            </label>
          </div>

          <div className="form-control md:col-span-2 flex flex-col">
            <label htmlFor="message">
              Message<span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              required
              className="border border-contact-form-grey-500 rounded-lg py-3 px-2 text-lg focus:outline-none focus:border-contact-form-green-600"
            />
          </div>

          <div className="form-control md:col-span-2 flex my-4">
            <input id="consent" type="checkbox" required />
            <label htmlFor="consent" className="ml-2">
              I consent to being contacted by the team <span>*</span>
            </label>
          </div>

          <div className="form-control md:col-span-2 flex justify-center items-center">
            <button
              className="w-full py-4 rounded-lg text-center text-[18px] font-bold text-white bg-contact-form-green-600 hover:bg-contact-form-green-700 cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
