import React from 'react'
import Locations from '../components/Locations'

function Destinations() {
  return (
    <div className='Destinations'> 
      <Locations />
      <h1>All Locations</h1>
      <div className='locationlist'>
      <div className="card">
        {[
          {
            name: "Kinnaur",
            image: "/src/assets/kinnaur.jpg",
            description: " A scenic hill station known for its stunning views and adventure sports",
          },
          {
            name: "Shimla",
            image: "/src/assets/shimla.jpg",
            description: "A beautiful city and capital of Himachal Pradesh",
          },
          {
            name: "Manali",
            image: "/src/assets/manali.jpg",
            description:
              "A scenic hill station known for its stunning views and adventure sports",
          },
          {
            name: "Spiti Valley",
            image: "/src/assets/spiti.jpg",
            description:
              "A cold desert mountain valley known for its monasteries and unique landscapes",
          },
          {
            name: "Dharamshala",
            image: "/src/assets/dharamshala.jpg",
            description:
              "Home to the Dalai Lama and a serene place for spiritual retreats",
          },
          {
            name: "Kasol",
            image: "/src/assets/kasol.jpg",
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
      </div>
    </div>
  )
}

export default Destinations
