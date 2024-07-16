import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

function Slider() {
    const navigate = useNavigate();

    const handleClick=()=>{
navigate('/plan')
    }
  return (
    
    <motion.div className="slider"  initial={{opacity: 0} }  whileInView={{opacity:1} } transition ={{duration:2}}>
        <h1>Trending</h1>
      <div className="imageDiv">
        <div className="jadu">
          <p>Manali </p> <p>Visit Manali Today</p>
        </div>
        <div className="image">
          <img src="src/assets/manali.jpg" alt="image" />
        </div>
      </div>
      <button className="btn-primary" onClick={handleClick}>See More </button>

    </motion.div>
  );
}

export default Slider;
