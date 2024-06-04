import React, { useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import "./SearchBooks.css";

const SearchBooks = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`
      );
      setResults(response.data.docs);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-books">
      <h2>Search by Book Name</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for books"
      />
      <button onClick={() => (window.location.href = "/bookshelf")}>
        My Bookshelf
      </button>
      <div className="results">
        {results.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            onAddToBookshelf={onAddToBookshelf}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;
