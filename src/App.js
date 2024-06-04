import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBooks from "./components/SearchBooks";
import Bookshelf from "./components/Bookshelf";
import "./App.css";

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<SearchBooks onAddToBookshelf={addToBookshelf} />}
          />
          <Route
            path="/bookshelf"
            element={<Bookshelf bookshelf={bookshelf} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
