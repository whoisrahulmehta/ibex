
import { easeInOut, motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Subscribe() {
    const navigate =useNavigate();
    const handleClick = ()=>{
      navigate('/join');
    }
  return (
    <motion.div className="subs"  initial={{height:0 , opacity:0}} whileInView={{height:"27vh", opacity:1}} transition={{duration:1,ease:"easeInOut"}} exit={{opacity: 0}}>
    <h1>Please subscribe for update !</h1>
    <p>Here where and there excuse me there Here where and there excuse me thereHere where and there excuse me thereHere where and there excuse me there</p>
    <button onClick={handleClick}>Subscribe Now</button>
  </motion.div>
  )
}

export default Subscribe
