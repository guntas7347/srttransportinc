"use client";

import ContactModal from "@/components/contact-modal";
import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

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
        <button
          type="button"
          className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          onClick={() => setShowModal(!showModal)}
        >
          Contact Us
        </button>
        {showModal && <ContactModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

export default Home;
