import React from "react";
import BannerCard from "./BannerCard";

export default function Banner() {
  return (
    <div className="px-4 lg:px-10  bg-lime-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2  h-full space-y-8">
          <h3 className="text-5xl -mt-12 font-bold leading-snug text-black">
            Buy & Sell Your Books
            <span className="text-[#674636]"> for the best prices</span>
          </h3>
          <p className="md:w-11/12 -mt-13">
            Looking to buy your next favorite book or sell the ones you’ve
            already enjoyed? Our platform connects book lovers like you,
            offering unbeatable deals whether you’re buying or selling. Get the
            best prices on a wide range of books, and make sure your beloved
            books find a new home. Start browsing or list your books today!
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a Book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-[#674636] text-white py-2 px-6 font-medium hover:bg-black">
              Search
            </button>
          </div>
        </div>

        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
}
