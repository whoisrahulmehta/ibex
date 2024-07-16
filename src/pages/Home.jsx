import React from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Subscribe from "../components/Subscribe";
import Locations from "../components/Locations";
import Reviews from "../components/Reviews";
import Slider from "../components/Slider";
import About from "../components/About";
import Cards from "../components/Cards";

function Home() {
  return (
    <div  className="home" >
      <Header />
      <Subscribe />
      <Introduction />
      <Locations />
      <About />
      <Reviews />
      <Cards />
      <Slider />
    </div>
  );
}

export default Home;
