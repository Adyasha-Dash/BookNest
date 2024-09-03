import React from "react";
import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function BestSellerBooks() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);

  return (
    <div>
      <Cards books={books} headline={"Best Seller Books"} />
    </div>
  );
}
