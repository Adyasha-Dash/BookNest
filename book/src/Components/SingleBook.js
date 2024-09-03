import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function SingleBook() {
  const book = useLoaderData();
  const navigate = useNavigate();

  // const handleBuyNow = () => {
    // navigate('/payment', { state: { book } });
  // };

  return (
    <div className="mt-28  px-4 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <img
          src={book.bookImage}
          alt={book.title}
          className="h-96 w-auto rounded-lg shadow-lg object-cover"
        />
        <div className="lg:ml-8 mt-6 lg:mt-0 bg-neutral-100 p-4 rounded-lg ">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {book.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            <span className="font-semibold">ID:</span> {book._id}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            <span className="font-semibold">Price: ₹</span> {book.price}
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300">
            {book.description || "No description available"}
          </p>
          <br />

          <div className="mt-6 flex gap-4">
            <button
              className="inline-flex items-center px-4 py-2 text-white bg-[#ad795f] hover:bg-green-200 rounded-lg shadow-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
