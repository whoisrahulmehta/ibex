import React from "react";
import Locations from "../components/Locations";
import Cards from "../components/Cards";

function Gallery() {
  return (
    <div className="Gallery">
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
            {/* <div className="about">{a.name}</div>
            <div className="dsc">{a.description}</div> */}
          </div>
        ))}
      </div>
      <Locations />
    </div>
  );
}

export default Gallery;
