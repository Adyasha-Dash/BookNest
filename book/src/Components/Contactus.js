import React, { useState } from "react";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="contact-page mt-5 bg-[#e9eae7] py-12 px-4 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-[#674636] mb-8">
        Contact Us
      </h2>
      <form
        className="max-w-xl mx-auto bg-[#aab396] p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-[#674636]"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-[#aab396] rounded-lg outline-none focus:border-[#674636] bg-[#fff8e8] text-[#674636]"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-[#674636]"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-[#aab396] rounded-lg outline-none focus:border-[#674636] bg-[#fff8e8] text-[#674636]"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-[#674636]"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border border-[#aab396] rounded-lg outline-none focus:border-[#674636] bg-[#fff8e8] text-[#674636]"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#674636] text-white py-3 px-6 rounded-lg font-medium hover:bg-black"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
