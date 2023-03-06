import React from "react";
import Header from "./Header";
import Layout from "./Layout";
import Specialities from "./Specialities";
import Doctors from "./Doctors";
import Footer from "./Footer";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header/> 
      <Layout/>
      <Specialities showHeader={false} />
      <Doctors showHeader={false} />
      <br />
        <Footer/>
    </div>
  )
}

export default Home;
