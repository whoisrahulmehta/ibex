import { motion } from "framer-motion";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

function Reviews() {
  const generateStars = (fullStars, halfStar) => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }
    if (halfStar) {
      stars.push(<FaStarHalf key="half" />);
    }
    return <>{stars}</>;
  };

  return (
    
    <motion.div className="reviews"  initial = {{opacity:0}} whileInView={{opacity:1} } transition={{duration:2}}>
      {[
        {
          writer: "Rahul Mehta",
          review: "IBEX is really the best place to help you travel.",
          headline: "Excellent Service",
          star: generateStars(4, true),
        },
        {
          writer: "Anita Sharma",
          review:
            "Amazing experience with IBEX, the trips were well-organized and fun.",
          headline: "Wonderful Experience",
          star: generateStars(5, false),
        },
        {
          writer: "Vikram Singh",
          review:
            "Professional and friendly guides made the journey unforgettable.",
          headline: "Highly Recommended",
          star: generateStars(4, true),
        },
        {
          writer: "Pooja Verma",
          review: "Great customer service and fantastic tour options.",
          headline: "Great Customer Service",
          star: generateStars(5, false),
        },
        {
          writer: "Rajesh Kumar",
          review: "The best travel agency for exploring the Himalayas.",
          headline: "Best in the Business",
          star: generateStars(4, true),
        },
        {
          writer: "Sonia Gupta",
          review: "Our trip to Manali was unforgettable thanks to IBEX.",
          headline: "Unforgettable Trip",
          star: generateStars(5, false),
        },
        {
          writer: "Amit Patel",
          review: "Excellent service and great value for money.",
          headline: "Value for Money",
          star: generateStars(5, false),
        },
        {
          writer: "Ritu Raj",
          review: "The trekking adventure was thrilling and well-coordinated.",
          headline: "Thrilling Adventure",
          star: generateStars(4, true),
        },
        {
          writer: "Deepak Malhotra",
          review: "IBEX offers a unique and personalized travel experience.",
          headline: "Personalized Experience",
          star: generateStars(5, false),
        },
        {
          writer: "Neha Kapoor",
          review:
            "Highly satisfied with the services and the professionalism of the team.",
          headline: "Highly Satisfied",
          star: generateStars(4, true),
        },
        {
          writer: "John Smith",
          review:
            "IBEX provided an incredible experience, highly recommend them.",
          headline: "Incredible Experience",
          star: generateStars(5, false),
        },
        {
          writer: "Emma Johnson",
          review: "A fantastic trip with excellent support from the IBEX team.",
          headline: "Fantastic Trip",
          star: generateStars(4, true),
        },
        {
          writer: "Liam Brown",
          review:
            "The tours are well-planned and the guides are very knowledgeable.",
          headline: "Well-Planned Tours",
          star: generateStars(5, false),
        },
        {
          writer: "Olivia Williams",
          review:
            "Beautiful locations and superb service throughout our journey.",
          headline: "Superb Service",
          star: generateStars(5, false),
        },
        {
          writer: "Noah Davis",
          review: "Our adventure with IBEX was nothing short of spectacular.",
          headline: "Spectacular Adventure",
          star: generateStars(4, true),
        },
      ].map((a, i) => (
        <div className="review" key={i}>
          <div className="jadu">
            <b style={{color:"gold"}}>{a.star}</b>
          </div>
          <p style={{fontSize:"1rem", color:"hotpink"}}>{a.headline}</p>
          <p style={{fontSize:"0.7rem", margin:"3%"}}>{a.review}</p>
          <p style={{color:"gold"}}>{a.star}</p>
          <p style={{color:"gold" , textTransform:"uppercase"}}>{a.writer}</p>
        </div>
      ))}
    </motion.div>
  );
}

export default Reviews;
