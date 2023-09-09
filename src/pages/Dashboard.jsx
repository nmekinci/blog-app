import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlogCard from "../components/blog/BlogCard";



const Dashboard = () => {
  return (
    <div>
      
      <NavBar />
      <BlogCard/>
      <Footer />
      
    </div>
  );
};

export default Dashboard;
