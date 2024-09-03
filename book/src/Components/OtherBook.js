import React from "react";
import Cards from "./Cards";
import { useState, useEffect } from "react";

export default function OtherBook() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);

  return (
    <div>
      <Cards books={books} headline={"Our Other Books"} />
    </div>
  );
}
