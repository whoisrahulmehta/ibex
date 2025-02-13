import { easeInOut, motion } from "framer-motion";
import React from "react";

function Cards(){
  return (
    <motion.div className="Cards" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2 , ease: "easeInOut"}}>
      {[
          {
            name: "Kinnaur",
            image: "https://github.com/whoisrahulmehta/assetsforwebsites/raw/ffafb122f09c33bf635959713e1d33c7af5d5744/ibex/kinnaur.jpg",
            description: " A scenic hill station known for its stunning views and adventure sports",
          },
          {
            name: "Shimla",
            image: "https://github.com/whoisrahulmehta/assetsforwebsites/raw/ffafb122f09c33bf635959713e1d33c7af5d5744/ibex/shimla.jpg",
            description: "A beautiful city and capital of Himachal Pradesh",
          },
          {
            name: "Manali",
            image: "https://github.com/whoisrahulmehta/assetsforwebsites/raw/ffafb122f09c33bf635959713e1d33c7af5d5744/ibex/manali.jpg",
            description:
              "A scenic hill station known for its stunning views and adventure sports",
          },
          {
            name: "Spiti Valley",
            image: "https://github.com/whoisrahulmehta/assetsforwebsites/raw/ffafb122f09c33bf635959713e1d33c7af5d5744/ibex/spiti.jpg",
            description:
              "A cold desert mountain valley known for its monasteries and unique landscapes",
          },
          {
            name: "Dharamshala",
            image: "https://github.com/whoisrahulmehta/assetsforwebsites/raw/ffafb122f09c33bf635959713e1d33c7af5d5744/ibex/dharamshala.jpg",
            description:
              "Home to the Dalai Lama and a serene place for spiritual retreats",
          },
          {
            name: "Kasol",
            image: "https://github.com/whoisrahulmehta/assetsforwebsites/raw/ffafb122f09c33bf635959713e1d33c7af5d5744/ibex/kasol.jpg",
            description:
              "A picturesque village known for its vibrant culture and trekking opportunities",
          }
        ].map((a, i) => (
        <div className="rows" key={i} style={{background :`url(${a.image})`}}>
         <p className="name"  >  {a.name}</p>
         <p className="dsc">{a.description}</p>
        </div>
      ))}
    </motion.div>
  );
}

export default Cards;
