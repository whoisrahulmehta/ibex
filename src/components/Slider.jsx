import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

function Slider() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="slider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1>Trending</h1>
      <div className="imageDiv">
        <div className="jadu">
          <p>Manali </p> <p>Visit Manali Today</p>
        </div>
        <div className="image">
          <img
            src="https://github.com/whoisrahulmehta/assetsforwebsites/raw/ffafb122f09c33bf635959713e1d33c7af5d5744/ibex/hp10.jpg"
            alt="image"
          />
        </div>
      </div>
      <button className="btn-primary" onClick={() => navigate("/plan")}>
        See More{" "}
      </button>
    </motion.div>
  );
}

export default Slider;
