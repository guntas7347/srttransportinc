"use client";

import React, { useState } from "react";
import ContactModal from "./contact-modal";

const ContactButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
        onClick={() => setShowModal(!showModal)}
      >
        Contact Us
      </button>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ContactButton;
