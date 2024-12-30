import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Branches from "./Branches"; // Import your data here
import "./SearchBook.css";

const SubjectsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const university = queryParams.get("university");
  const course = queryParams.get("course");
  const branch = queryParams.get("branch");
  const year = queryParams.get("year"); // Changed to 'year'

  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (university && course && branch && year) { // Changed to 'year'
      const universityData = Branches.universities.find(
        (uni) => uni.name === university
      );

      if (universityData) {
        const courseData = universityData.courses.find(
          (c) => c.course === course
        );
        if (courseData) {
          const branchData = courseData.branches.find(
            (b) => b.branch === branch
          );
          if (branchData) {
            const yearData = branchData.years.find(
              (yearData) => yearData.year === year // Changed to 'year'
            );
            if (yearData) {
              setSubjects(yearData.subjects || []);
            } else {
              setError("Invalid year selection."); // Changed to 'year'
            }
          } else {
            setError("This branch is not available in the selected course.");
          }
        } else {
          setError("This course is not available in the selected university.");
        }
      } else {
        setError("This university is not available.");
      }
    } else {
      setError("Missing parameters for university, course, branch, or year."); // Changed to 'year'
    }
  }, [university, course, branch, year]);

  const handleSubjectClick = (subject) => {
    console.log("Selected Subject:", subject);
    // Navigate or perform an action based on the selected subject
    // For example, navigate to a details page with subject details
    navigate(`/subject-details?subject=${subject}`);
  };

  return (
    <div className="hero">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-4 text-danger">Subjects List</h2>
            {error && <p className="text-danger">{error}</p>}
            {!error && subjects.length > 0 ? (
              <div className="d-flex flex-wrap justify-content-center">
                {subjects.map((subject, index) => (
                  <button
                    key={index}
                    className="text-danger btn btn-light m-2 rounded"
                    onClick={() => handleSubjectClick(subject)}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            ) : (
              <p>No subjects available for the selected options.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;
