import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBook.css";

const Search = () => {
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to Branch page with university and course as query parameters
    navigate(`/branch-semester?university=${university}&course=${course}`);
  };

  return (
    <div className="hero">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-4 mb-3 text-white">
              CRUSH THE TEST, UNLEASH SUCCESS
            </h1>
            <h2 className="mb-4 text-danger">PUSTAK GHAR</h2>
            <p className="lead mb-4 text-white">
              FREE STUDY MATERIAL, NOTES, PYQS, VIDEO PLAYLISTS AND MORE...
            </p>
            <form
              onSubmit={handleSubmit}
              className="form-inline justify-content-center flex-column"
            >
              <div className="form-group mx-2 mb-3">
                <select
                  className="form-control"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                >
                  <option value="">Select University</option>
                  <option value="GGSIPU">GGSIPU</option>
                  <option value="AKTU">AKTU</option>
                  <option value="DU">DU</option>
                </select>
              </div>
              <div className="form-group mx-2 mb-3">
                <select
                  className="form-control"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="">Select Course</option>
                  <option value="Btech">B.Tech</option>
                  <option value="Bcom">B.Com</option>
                  <option value="Bsc">B.Sc</option>
                  <option value="BCA">BCA</option>
                </select>
              </div>
              <div className="mt-3">
                <button type="submit" className="btn btn-danger mx-2">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
