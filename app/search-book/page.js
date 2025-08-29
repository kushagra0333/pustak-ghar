"use client"
import React, { useState, useEffect } from "react";
import "@/cssFiles/SearchBook.css";
import { useRouter } from "next/navigation";
import Branches from "../branches/page";

const Search = () => {
    const [university, setUniversity] = useState("");
    const [course, setCourse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [animationStep, setAnimationStep] = useState(0);
    const router = useRouter();

    // Progressive animation effect
    useEffect(() => {
        const timers = [
            setTimeout(() => setAnimationStep(1), 200),
            setTimeout(() => setAnimationStep(2), 600),
            setTimeout(() => setAnimationStep(3), 1000),
        ];

        return () => timers.forEach(clearTimeout);
    }, []);

    // Extract university name dynamically
    const universityName = Branches?.universityName;

    // Check if courses exist and is an array before using map
    const courses = Array.isArray(Branches?.courses)
        ? Branches.courses.map((course) => course.courseName)
        : [];

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!university || !course) return;

        setIsLoading(true);

        // Simulate API call with realistic loading time
        setTimeout(() => {
            setIsLoading(false);
            router.push(`/branch-year?university=${university}&course=${course}`);
        }, 1500);
    };

    const handleUniversityChange = (e) => {
        setUniversity(e.target.value);
        setCourse(""); // Reset course when university changes
    };

    const features = [
        "Free Resources",
        "Quality Notes",
        "Video Content",
        "Previous Papers",
        "Expert Guidance",
    ];

    const stats = [
        { number: "15K+", label: "Happy Students" },
        { number: "800+", label: "Study Materials" },
        { number: "95%", label: "Success Rate" },
    ];

    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div
                            className={`hero-content ${animationStep >= 1 ? "fade-in" : ""}`}
                        >
                            {/* Main Heading */}
                            <div className={animationStep >= 1 ? "fade-in" : ""}>
                                <h1 className="hero-title">Transform Your Academic Journey</h1>
                            </div>

                            {/* Brand Name */}
                            <div className={animationStep >= 2 ? "fade-in-delay" : ""}>
                                <h2 className="hero-subtitle">Pustak Ghar</h2>
                            </div>

                            {/* Description */}
                            <div className={animationStep >= 2 ? "fade-in-delay" : ""}>
                                <p className="hero-description">
                                    Access premium study materials, comprehensive notes, previous
                                    year questions, and expert-curated content - all completely
                                    free. Your success story starts here.
                                </p>
                            </div>

                            {/* Feature Tags */}
                            <div
                                className={`feature-tags ${animationStep >= 2 ? "fade-in-delay" : ""
                                    }`}
                            >
                                {features.map((feature, index) => (
                                    <span key={index} className="feature-tag">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Search Form */}
                            <div className={animationStep >= 3 ? "fade-in-delay-2" : ""}>
                                <form onSubmit={handleSubmit} className="search-form">
                                    <div className="form-group">
                                        <select
                                            className={`form-control ${university ? "success" : ""}`}
                                            value={university}
                                            onChange={handleUniversityChange}
                                            required
                                        >
                                            <option value="">🎓 Choose Your University</option>
                                            {universityName && (
                                                <option value={universityName}>{universityName}</option>
                                            )}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <select
                                            className={`form-control ${course ? "success" : university ? "" : "error"
                                                }`}
                                            value={course}
                                            onChange={(e) => setCourse(e.target.value)}
                                            disabled={!university}
                                            required
                                        >
                                            <option value="">📚 Select Your Course</option>
                                            {courses.length > 0 ? (
                                                courses.map((courseName, index) => (
                                                    <option key={index} value={courseName}>
                                                        {courseName}
                                                    </option>
                                                ))
                                            ) : (
                                                <option disabled>
                                                    {university
                                                        ? "No courses available"
                                                        : "Select university first"}
                                                </option>
                                            )}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className={`search-button ${!isLoading && university && course ? "pulse" : ""
                                                }`}
                                            disabled={!university || !course || isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span className="loading-spinner"></span>
                                                    Finding Resources...
                                                </>
                                            ) : (
                                                "🚀 Explore Study Materials"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Statistics */}
                            <div
                                className={`stats-row ${animationStep >= 3 ? "fade-in-delay-2" : ""
                                    }`}
                            >
                                {stats.map((stat, index) => (
                                    <div key={index} className="stat-item">
                                        <span className="stat-number">{stat.number}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Text */}
                            <div
                                className={`hero-footer ${animationStep >= 3 ? "fade-in-delay-2" : ""
                                    }`}
                            >
                                ✨ Trusted by students nationwide for quality education
                                resources ✨
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
