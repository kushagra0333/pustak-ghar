import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/hero";
import BlogCards from "../components/blogPage/blogCards"
const Home = () => {
  return (
    <>
    <Hero />
    <BlogCards />
    </>
  );
};

export default Home;
