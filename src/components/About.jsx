import { motion } from "framer-motion";
import React from "react";

import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();

    const handleLearn =()=>{
        navigate('/about');
    }
  return (
    
    <motion.div className="Aboutus" initial-={{opacity : 0, height:0}} whileInView={{opacity:1, height: "20vh"}}>
      <h1>Travel Far Enough to find yourself</h1>
      <p>
        Discover breathtaking Himalayan adventures with IBEX. Explore pristine
        landscapes, vibrant cultures, and thrilling experiences tailored for
        every traveler seeking unforgettable journeys in Himachal Pradesh.
      </p>
      <button className="btn-primary" onClick={handleLearn}>Learn More</button>
    </motion.div>
  );
}

export default About;
