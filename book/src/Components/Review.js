import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Avatar } from "flowbite-react";
import profile from "../assets/profile.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Review() {
  return (
    <div className="my-12 px-4 lg:px-24 bg-neutral-50">
      {" "}
      {/* Light cream background */}
      <h2 className="text-5xl text-center font-bold mb-10 leading-snug text-neutral-800">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[...Array(6)].map((_, index) => (
            <SwiperSlide
              key={index}
              className="shadow-xl py-8 px-4 bg-white border border-neutral-300 rounded-lg"
            >
              <div className="space-y-6">
                <div className="text-amber-400 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <div className="mt-7">
                  <p className="mb-5 text-left text-neutral-600">
                  I recently finished The Midnight Library by Matt Haig, and it was an incredibly thought-provoking experience. The concept of exploring alternate lives through a magical library is both original and captivating.
                  </p>
                  <Avatar
                    alt="User profile"
                    img={profile}
                    rounded
                    className="w-12 mb-4"
                  />
                  <h5 className="text-lg font-medium text-neutral-800">
                    Adyasha Dash
                  </h5>
                  <p className="text-base text-neutral-600">Student</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
