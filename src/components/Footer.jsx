
import { motion } from "framer-motion";
import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa" ;

function Footer() {
  
  return (
    <motion.footer initial={{ opacity:0 ,y:200}} whileInView={{opacity:1,  y:0}} transition={{delay:0, duration:2, ease:"linear"}}>
      <section className="container">
        <motion.div className="fbox" initial = {{opacity:0 , y:200}} whileInView={{opacity:1, y:10} } transition={{duration:1}}>
          <h1 className="brand">IBEX</h1>
          <p>
            Embark on an unforgettable journey through the majestic Himalayas
            with us. Discover the enchanting beauty of <b style={{textTransform:"uppercase", color: "gold", fontStyle:"italic"}}>The Great Himalayas</b>, from
            its serene valleys to its towering peaks. Let our expert guides and
            tailored itineraries turn your travel dreams into reality. Adventure
            awaits, and we’re here to make every moment magical.
          </p>
          <div className="social">
            {[
              { id: 1, name: "Facebook", icon: <FaFacebook />, link: "" },
              { id: 2, name: "Instagram", icon: <FaInstagram />, link: "" },
              { id: 3, name: " X", icon: <FaTwitter />, link: "" },
              { id: 4, name: "WhatsApp", icon: <FaWhatsapp />, link: "" },
              { id: 5, name: "LinkedIn", icon: <FaLinkedin />, link: "" },
            ].map((so, sI) => (
              <span key={so.id}>
                <a href={so.link}>{so.icon}</a>
              </span>
            ))}
          </div>
        </motion.div>
        <div className="fbox">
          <h1>Located At</h1>
          {[
            "Wayne International Corporation",
            "2109 N Sigma St.",
            "Gotham City, GA 77777",
            "United States",
          ].map((a, i) => (
            <p key={i}>{a}</p>
          ))}
        </div>
         <div className="fbox">
          <h1>
            <span className="brand">IBEX</span>
            <span> Unleashing the Ultimate Himalayan Adventure Experience</span>
          </h1>
        </div>
        <div className="fbox">
          {[
            { name: "Services", link: "" },
            { name: "Privacy Policy", link: "" },
            { name: "Cockies Policy", link: "" },
            { name: "Terms and COnditions", link: "" },
          ].map((a, i) => (
            <a href={a.link} key={i}>
              {a.name}
            </a>
          ))}
        </div>
      </section>
      <section className="bottom">
        {[
          { name: <FaCopyright />, class: "", link: "" },
          { name: "2023", class: "", link: "" },
          { name: "IBEX", class: "brand", link: "" },
          { name: "All Rights Reserved", class: "", link: "" },
          { name: "About Us", class: "", link: "" },
          { name: "Terms Of use", class: "", link: "" },
          { name: "Privacy Policy", class: "", link: "" },
          { name: "Cockies Policy", class: "", link: "" },
        ].map((a, i) => (
          <a href={a.link} key={i}>
            {a.name}
          </a>
        ))}
      </section>
      <p className="muted">Powered By - RAHUL MEHTA <FaCopyright /><FaGithub /> WHOISRAHULMEHTA</p>
    </motion.footer>
  );
}

export default Footer;
