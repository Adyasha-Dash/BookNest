import React from "react";
import favoritebook from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

export default function FavBook() {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img
          src={favoritebook}
          alt="Favorite Books"
          className="rounded md:w-10/12"
        />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h5 className="text-5xl font-bold text-black my-5 leading-snug">
          Find Your Favorite <span className="text-[#674636]">Books Here!</span>
        </h5>
        <p className="mb-10 text-base md:w-15/2">
          Discover a curated selection of bestsellers, hidden gems, and timeless
          classics that cater to every reader’s taste. Whether you’re into
          gripping thrillers, heartwarming romances, or insightful non-fiction,
          we’ve got the perfect book waiting for you. Dive into our collection
          and find your next favorite read today!
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">400+</h3>
            <p className="text-base mt-2">Book Listings</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">520+</h3>
            <p className="text-base mt-2">Registered Users</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">1200+</h3>
            <p className="text-base mt-2">PDF Downloads</p>
          </div>
        </div>
        <Link to="/shop">
          <button className="bg-[#674636] text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 mt-6">
            Explore More!
          </button>
        </Link>
      </div>
    </div>
  );
}
