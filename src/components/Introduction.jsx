import { easeIn, motion } from "framer-motion";
import React from "react";

function Introduction() {
  return (
    <motion.div className="introduction" initial={{opacity: 0 , rotateX:"360deg"} }  whileInView={{opacity:1 , rotateX:"0deg"} } transition ={{duration:2}}>
      <motion.div className="image slideinleft" initial={{width:0, opacity:0}} whileInView={{width :"14vmin", opacity:1} }  transition={{delay:2, duration: 1}}>
<img src="/src/assets/favicon.png" alt="img" />
      </motion.div>
      <motion.div className="q " initial={{x:-200}} whileInView={{ x:0}} transition={{delay:"0.5", ease:"linear" , duration:1 }}>
        <p>
          Welcome to <span className="brand">IBEX</span>, your gateway to the majestic <span className="brand">Himalayas</span>. Embark on a
          journey where soaring peaks, serene landscapes, and ancient cultures
          converge to create unforgettable experiences. Whether you seek
          thrilling adventures, spiritual retreats, or simply wish to immerse
          yourself in the natural beauty of the world's highest mountains, IBEX
          offers curated trips and expert guidance to make your Himalayan dreams
          a reality. Discover the essence of adventure with us and unlock the
          secrets of this breathtaking region. Your Himalayan adventure starts
          here.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Introduction;
