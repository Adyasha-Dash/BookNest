import React from "react";

export default function Sell() {
  return (
    <div className="sell-page bg-neutral-100 py-12 px-4 lg:px-24">
      <div className="container mx-auto">
        <h2
          className="text-4xl font-bold text-center mt-6 text-[#674636]"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
        >
          Sell Your Books Here!
        </h2>
        <p className="text-lg text-center text-neutral-700 my-6">
          Do you have books you'd like to sell? Join our community of sellers
          and reach thousands of potential buyers. Whether you're clearing out
          your bookshelf or looking to make a little extra money, we make
          selling easy and convenient.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold mb-4 text-[#674636]">
              How It Works
            </h3>
            <ul className="list-disc list-inside text-neutral-700">
              <li className="mb-2">
                <strong>Step 1:</strong> Register and create your profile.
              </li>
              <li className="mb-2">
                <strong>Step 2:</strong> Use the admin panel to Upload 
                  images details of the books you want to sell.
              </li>
              <li className="mb-2">
                <strong>Step 3:</strong> Set your prices and publish your
                listings.
              </li>
              <li className="mb-2">
                <strong>Step 4:</strong> Manage your book listings through your
                dashboard.
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://m.media-amazon.com/images/G/01/sell/images/posters/Sell-Books-Hero._CB666596354_.png" // Replace with the path to your image
              alt="Sell Books"
              className="w-full h-auto  "
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/admin/dashboard"
            className="bg-[#674636] text-white font-semibold px-6 py-3 rounded-lg hover:bg-black transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
