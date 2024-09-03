import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../Components/Cards.css";

export default function Cards({ books, headline }) {
  return (
    <div>
      <h4 className="text-4xl text-center font-bold text-neutral-800 my-5 shadow-sm">
        {headline}
      </h4>
      <div className="my-12 px-4 lg:px-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <div className="w-full max-w-xs h-full bg-amber-50 border-neutral-400 border rounded-lg shadow-md flex flex-col">
                <Link to={`/book/${book._id}`} className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={book.bookImage}
                    alt={book.title}
                  />
                </Link>
                <div className="px-4 pb-4 flex-grow flex flex-col justify-between  bg-lime-100">
                  <Link to={`/book/${book._id}`}>
                    <h5 className="text-sm font-semibold tracking-tight h-10 overflow-hidden">
                      {book.title}
                    </h5>
                  </Link>
                  <p className="text-xs mt-1">{book.author}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-bold">
                      {book.price}
                    </span>
                    <a
                      href="#"
                      className="bg-[#674636] text-white hover:bg-neutral-400 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-xs px-2 py-1 text-center"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
