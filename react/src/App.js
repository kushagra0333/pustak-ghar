import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./components/SearchBook";
import Branch from "./components/SearchBranch";
import SubjectsPage from "./components/SubjectSelect"
import Content from "./components/Content"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SubjectDetails from "./components/SubjectDetails";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router >
      <NavBar />
      <div className="main">
        <Routes basename="/">
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/" element={<Search />} />
          <Route path="/branch-year" element={<Branch />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/content" element={<Content />} />
          <Route path="/subject-details" element={<SubjectDetails />} />

        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
