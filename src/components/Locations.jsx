import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

function Locations() {
    const navigate = useNavigate();

    const handleClick = ()=>{
      navigate('/destinations');
    }
  return (
    <motion.div  initial={{opacity:0, y:200}} whileInView={{opacity:1, y:0}} transition={{duration:2}} className="locations ">
      <div className="heading">Starred Locations</div>
      <div className="card">
        {[
          {
            name: "Kinnaur",
            image: "/kinnaur.jpg",
            description: " A scenic hill station known for its stunning views and adventure sports",
          },
          {
            name: "Shimla",
            image: "/shimla.jpg",
            description: "A beautiful city and capital of Himachal Pradesh",
          },
          {
            name: "Manali",
            image: "/manali.jpg",
            description:
              "A scenic hill station known for its stunning views and adventure sports",
          },
          {
            name: "Spiti Valley",
            image: "/spiti.jpg",
            description:
              "A cold desert mountain valley known for its monasteries and unique landscapes",
          },
          {
            name: "Dharamshala",
            image: "/dharamshala.jpg", 
            description:
              "Home to the Dalai Lama and a serene place for spiritual retreats",
          },
          {
            name: "Kasol",
            image: "/kasol.jpg",
            description:
              "A picturesque village known for its vibrant culture and trekking opportunities",
          }
        ].map((a, i) => (
          <div className="tcard" key={i}>
            <div className="picture">
              <img src={a.image} alt="image" />
            </div>
            <div className="about">{a.name}</div>
            <div className="dsc">{a.description}</div>
          </div>
        ))}
      </div>
      <button className="btn-primary" onClick={handleClick}>See More </button>
    </motion.div>
  );
}

export default Locations;
