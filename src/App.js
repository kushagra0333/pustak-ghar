import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./components/SearchBook";
import Branch from "./components/SearchBranch";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router basename="/pustak-ghar">
        <NavBar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/branch-semester" element={<Branch />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
