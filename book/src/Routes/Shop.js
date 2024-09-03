import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("title");

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        const uniqueCategories = [
          "All",
          ...new Set(data.map((book) => book.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortOption === "price") {
      return a.price - b.price;
    }
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <div className="shop-page bg-neutral-100 text-neutral-800 py-12 px-4 lg:px-20">
      <h2
        className="text-4xl my-16 font-bold text-center text-[#674636]"
        style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)" }}
      >
        All Books Are Here!
      </h2>

      <div className="my-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center mb-4 md:mb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 m-2 text-sm font-medium ${
                selectedCategory === category
                  ? "text-black bg-[#f7eed3]"
                  : "text-white bg-[#674636]"
              } border border-[#674636] rounded-lg hover:bg-black hover:text-white focus:outline-none`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 font-medium text-[#674636]">
            Sort by:
          </label>
          <select
            id="sort"
            className="px-4 py-2 border border-[#674636] rounded-lg bg-[#f7eed3] text-sm"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      <section className="my-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedBooks.map((book) => (
            <article
              key={book._id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Link to={`/book/${book._id}`}>
                <img
                  className="rounded-t-lg w-full h-56 bg-[#f7eed3] p-2 object-cover"
                  src={book.bookImage}
                  alt={book.title}
                />
              </Link>
              <div className="p-3  bg-lime-100 ">
                <div className="h-14 ">
                  <Link to={`/book/${book._id}`}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {book.title}
                    </h5>
                  </Link>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {book.author}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ₹ {book.price}
                  </span>
                  <Link
                    to={`/book/${book._id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#674636] rounded-lg "
                  >
                    Buy Now
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <br />
      </section>
    </div>
  );
}
