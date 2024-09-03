import React from "react";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="w-full px-4 lg:px-24">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              About Us
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">Our Story</li>
              <li className="mb-4">Careers</li>
              <li className="mb-4">Press Releases</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Support
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">Help Center</li>
              <li className="mb-4">Shipping & Returns</li>
              <li className="mb-4">FAQs</li>
              <li className="mb-4">
                {" "}
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Policy
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">Privacy Policy</li>
              <li className="mb-4">Terms & Conditions</li>
              <li className="mb-4">Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Explore
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">Browse Genres</li>
              <li className="mb-4">Bestsellers</li>
              <li className="mb-4">New Arrivals</li>
              <li className="mb-4">Special Offers</li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-4 bg-green-200 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-[#674636] flex items-center gap-2"
          >
            <FaBook className="inline-block" />
            BookNest
          </Link>

          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="hover:text-[#674636] text-black">
              {/* Facebook Icon */}
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="hover:text-[#674636] text-black">
              {/* Twitter Icon */}
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="hover:text-[#674636] text-black">
              {/* Instagram Icon */}
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.961 0C15.376 4.18 16.2 4.445 16.2 4.445a3.56 3.56 0 0 1 .095 2.623 3.832 3.832 0 0 1 1.056 2.653c0 3.811-2.318 4.648-4.524 4.893.276.238.518.708.518 1.427 0 1.03-.01 1.858-.01 2.11 0 .265.176.574.688.476A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="hover:text-[#674636] text-black">
              {/* Dribbble Icon */}
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M19.583 10.083a9.583 9.583 0 1 0-9.583 9.584 9.583 9.583 0 0 0 9.583-9.584ZM3.222 4.01a7.742 7.742 0 0 1 2.68-.58 30.347 30.347 0 0 1 1.55 2.69c-.707.224-1.442.53-2.184.923a15.826 15.826 0 0 0-2.046-3.034ZM2.875 6.646c.03.038 1.693 2.446 2.658 4.657-2.462.732-4.918.707-5.151.707a7.7 7.7 0 0 1 2.493-5.364Zm-2.43 7.05a9.63 9.63 0 0 0 4.842.593c-.124.508-.225 1.043-.288 1.595a7.749 7.749 0 0 1-4.554-2.188Zm6.418 3.55c.08-.68.21-1.344.384-1.981a15.743 15.743 0 0 1 5.71 2.873 7.74 7.74 0 0 1-6.094-.892ZM8.354 15.36a15.743 15.743 0 0 1 .883-3.43c.614.085 1.24.13 1.87.13 1.837 0 3.692-.283 5.512-.842a7.738 7.738 0 0 1-2.455 4.856 17.66 17.66 0 0 0-5.81-1.714Zm8.066-2.568c.082-.109.16-.219.237-.329a15.662 15.662 0 0 0 2.13-7.574 7.743 7.743 0 0 1 .268 1.978c0 2.269-.9 4.323-2.405 5.926Zm1.156-9.47a9.629 9.629 0 0 0-1.852 7.141c-1.79.6-3.576.906-5.323.906h-.002c-.587 0-1.17-.04-1.744-.115-.163-.393-.326-.776-.492-1.151a30.162 30.162 0 0 0 8.313-6.86c.405.333.8.697 1.2 1.08Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
