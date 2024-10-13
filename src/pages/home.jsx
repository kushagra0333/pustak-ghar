import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/hero";
import BlogCards from "../components/blogPage/blogCards";
import LoginBtn from "../components/button/loginBtn"
const Home = () => {
  return (
    <>
    <Hero />
    <BlogCards />
    <LoginBtn />
    </>
  );
};

export default Home;
