
import { motion } from "framer-motion";
import React from "react";


function Header() {
  
  return (
    <section className="header"  initial={{opacity: 0} }  whileInView={{opacity:1} } transition ={{duration:2}}>
      <div className="middle slideIn">
        {[
          { name: "Travel", ani: "slideinright" },
          { name: "Far Enough", ani: "slideinleft" , img:"https://github.com/whoisrahulmehta/assetsforwebsites/raw/ffafb122f09c33bf635959713e1d33c7af5d5744/ibex/favicon.png"},
          { name: "To Find Yourself", ani: "slideinleft" },
        ].map((a, i) => (
          <motion.p className={`quote ${a.ani}`} key={i}  initial={{opacity: 0,width:0} }  whileInView={{opacity:1, width:"100%"} } transition ={{duration:2}}>
            {a.name} {a.img && <motion.span  className="imageInspan"><motion.img  initial={{ width:0}} whileInView={{width:"7vw"}} transition={{delay:2,  duration:0.3, ease:"linear"}} src={a.img} alt="" /></motion.span>}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

export default Header;