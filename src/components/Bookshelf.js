import React from "react";
import { Link } from "react-router-dom";
import "./Bookshelf.css";

const Bookshelf = ({ bookshelf }) => {
  return (
    <div className="bookshelf">
      <h2>My Bookshelf</h2>
      <button className="shelf">
        <Link to="/" className="back-button">
          Back
        </Link>{" "}
      </button>
      <div className="grid">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
