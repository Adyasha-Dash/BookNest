import React from "react";
import { Link } from "react-router-dom";
import awardbooks from "../assets/awardbooks.png";

export default function PromoBanner() {
  return (
    <div className="mt-16 py-12 bg-amber-100 lg:px-24"> {/* Light beige background */}
      <div className="flex flex-col md:flex-row justify-between gap-12 items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug text-neutral-800">
            2024 National Book Awards for Fiction Shortlist
          </h2>
          <Link to="/shop">
            <button className="bg-[#674636] text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
              Get Promo Code
            </button>
          </Link>
        </div>
        <div>
          <img src={awardbooks} style={{ width: '350px' }} alt="Award Books" />
        </div>
      </div>
    </div>
  );
}
