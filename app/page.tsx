import ContactButton from "@/components/contact-button";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 order-2 md:order-1">
        <Image
          className="w-dvh"
          src={"/assets/truck-home.jpg"}
          width={1000}
          height={1000}
          alt="truck"
        />
      </div>
      <div className=" md:w-1/2 order-1 md:px-24 min-h-96 text-center px-5 flex flex-col justify-center items-center">
        <h1 className="mb-4 text-3xl font-bold  text-gray-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Efficient Logistics
          </span>{" "}
          Solutions Provider
        </h1>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Delivering Goods Safely
        </h1>
        <ContactButton />
      </div>
    </div>
  );
};

export default Home;
