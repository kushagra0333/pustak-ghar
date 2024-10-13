import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/hero";
import BlogCards from "../components/blogPage/blogCards";
import Login from "../components/button/login"
const Home = () => {
  return (
    <>
    <Hero />
    <BlogCards />
    <Login />
    </>
  );
};

export default Home;
