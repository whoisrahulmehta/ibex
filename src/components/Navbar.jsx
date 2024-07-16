import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [add, setAdd] =useState(true);
// const [scroll , setScroll] =useState("");

const intialscroll =useRef(window.screenY);

// useEffect(
//   ()=>{
//     function checkscroll(){ 
//      let newScrollval = window.scrollY ;
   
//    if(newScrollval > intialscroll.current){
//      console.log(" scrolling down" );
// setAdd(false);
//     //  setScroll(newScrollval)
//    }else if(newScrollval < intialscroll.current){
//      console.log("scrolling up")
// setAdd(true);

//     //  setScroll(newScrollval)
//    } else{
//     console.log("paused scrolling")
// setAdd(true);

//    }
//    newScrollval = intialscroll.current;
//    }
//    window.addEventListener("scroll" , checkscroll)
   
//   }
// ,[])

  return (
  <nav className={` ${add ? "slideintop " : " "}`}>
      <div className="brand">
          <span><img src="/src/assets/favicon.png" alt="img"/></span><span>IBEX</span>
      </div>
      <motion.div className="navmenu" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2 } }>
        {[
          { id: 1, name: "Home", path: "/" },
          { id: 2, name: "Gallery", path: "/gallery" },
          { id: 3, name: "Destinations", path: "/destinations" },
          { id: 4, name: "Plan", path: "/plan" },
          { id: 5, name: "About", path: "/about" },
          { id: 6, name: "Join", path: "/join" },
        ].map((m, mI) => (
          <NavLink to={m.path} key={m.id}>
            {m.name}
          </NavLink>
        ))}
      </motion.div>
    </nav>
  );
}

export default Navbar;
