import React from "react";

const ContactModal = ({
  onClose,
}: {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto overflow-x-hidden ">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-amber-50 min-h-60 rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Contact Us
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4 flex flex-col justify-center items-center">
              <span className="font-semibold">
                Email: info@srttransportinc.com, chahalr1313@gmail.com
              </span>
              <span className="font-semibold">Phone: +1 416-455-9663</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
