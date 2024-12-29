import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Branches from "./Branches"; // Import your data here

const Branch = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const university = queryParams.get("university");
  const course = queryParams.get("course");

  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [availableBranches, setAvailableBranches] = useState([]);
  const [availableSemesters, setAvailableSemesters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (university && course) {
      const universityData = Branches.universities.find(
        (uni) => uni.name === university
      );
      if (universityData) {
        const courseData = universityData.courses.find(
          (c) => c.course === course
        );
        if (courseData) {
          setAvailableBranches(courseData.branches);
          setAvailableSemesters(courseData.semesters.map((sem) => sem.semester));
        } else {
          setError("This course is not available in the selected university.");
        }
      } else {
        setError("This university is not available.");
      }
    } else {
      setError("University or course is missing.");
    }
  }, [university, course]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Branch:", branch);
    console.log("Selected Semester:", semester);
  };

  return (
    <div className="hero">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-4 text-danger">PUSTAK GHAR</h2>
            {error && <p className="text-danger">{error}</p>}
            {!error && (
              <form
                onSubmit={handleSubmit}
                className="form-inline justify-content-center flex-column"
              >
                <div className="form-group mx-2 mb-3">
                  <select
                    className="form-control"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  >
                    <option value="">Select Branch</option>
                    {availableBranches.length > 0 ? (
                      availableBranches.map((branchOption, index) => (
                        <option key={index} value={branchOption}>
                          {branchOption}
                        </option>
                      ))
                    ) : (
                      <option value="">No branches available</option>
                    )}
                  </select>
                </div>
                <div className="form-group mx-2 mb-3">
                  <select
                    className="form-control"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                  >
                    <option value="">Select Semester</option>
                    {availableSemesters.length > 0 ? (
                      availableSemesters.map((semesterOption, index) => (
                        <option key={index} value={semesterOption}>
                          {semesterOption}
                        </option>
                      ))
                    ) : (
                      <option value="">No semesters available</option>
                    )}
                  </select>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-danger mx-2">
                    Search
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branch;
