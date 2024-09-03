import React from "react";
import "../Routes/About.css"; // Make sure to create and link this CSS file

export default function About() {
  return (
    <div className="about-page bg-neutral-100 text-neutral-800 py-12 px-4 lg:px-20">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mt-6 mb-8 text-[#674636]">
          About Us
        </h1>
        <p className="text-lg text-center mb-8 leading-relaxed">
          Welcome to BookNest, where we believe in the power of stories to
          inspire, entertain, and educate. Our mission is to provide book lovers
          with a diverse collection of books and an exceptional shopping
          experience.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-[#674636]">
              Our Story
            </h2>
            <p className="text-base text-neutral-800 mb-6">
              BookNest was founded with the idea of creating a bookstore that
              not only offers a wide range of books but also creates a welcoming
              space for book enthusiasts. Our dedicated team is committed to
              curating a selection of books that cater to all tastes and
              preferences.
            </p>
            <p className="text-base text-neutral-800">
              We strive to offer a seamless shopping experience, from browsing
              our collections to checking out with ease. Our customer service
              team is always here to assist you with any inquiries or needs you
              may have.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnR9hxr_mOREccHRm3aUU1-IU3S2M__SiJJXFFdplx8_l-cUFZDMKaP4lx2L4Xf3kVkqI&usqp=CAU" // Replace with the path to your image
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
