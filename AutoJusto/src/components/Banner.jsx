import React from "react";
import "../index.css";

export function Banner() {
  return (
    <div className="sticky top-0 w-full ">
      <button className=" items-center justify-center w-full p-4 hover:bg-slate-300 hover:text-slate-500 bg-cyan-200 flex font-bold font-roboto">
        Contáctanos
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
