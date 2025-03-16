import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-20 flex justify-between items-center px-10 text-2xl py-11">
        <div className="flex flex-1 justify-center md:justify-start">
          <Image src={"/assets/logo.png"} width={150} height={100} alt="Logo" />
        </div>
        <h1 className="mb-4 hidden  md:justify-start md:flex md:flex-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900  dark:text-white">
          SRT Transport Inc.
        </h1>
        <div className="">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </div>
      </div>
      <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  );
};

export default Navbar;
