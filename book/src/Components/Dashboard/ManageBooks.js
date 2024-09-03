import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageBooks() {
  const [allbooks, setAllbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => setAllbooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const deleteBook = (id) => {
    fetch(`http://localhost:5000/book/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        alert("Book Deleted successfully!");
        // Optionally, update the state to remove the deleted book from the list
        setAllbooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      })
      .catch((error) => console.error("Error deleting book:", error));
  };

  return (
    <div className="px-4 my-8 bg-[#fff8e8] dark:bg-neutral-800">
      <h2
        className="text-4xl my-18 font-bold text-center text-[#674636] dark:text-amber-300"
        style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)" }}
      >
        Manage Your Books
      </h2>
      <br />
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="lg:w-[800px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-black dark:bg-neutral-800 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Book Name
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                 Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {allbooks.map((book, index) => (
              <tr
                key={book._id}
                className="bg-gray-50 border-b "
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {book.title}
                </td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.category}</td>
                <td className="px-6 py-4">{book.price}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => deleteBook(book._id)}
                    className="bg-red-800 px-3 py-1 font-semibold rounded-sm text-white hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      <br />
      <br />
    </div>
  );
}
