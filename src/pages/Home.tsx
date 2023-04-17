import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Tags from "../components/Tags/Tags";
import VideoGrid from "../components/grid/VideoGrid/VideoGrid";
import Pagination from "../components/ui/Pagination/Pagination";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </div>
  );
};

export default HomePage;
