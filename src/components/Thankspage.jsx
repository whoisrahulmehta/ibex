import React from "react";
import { FaPrayingHands } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Thankspage({ massage }) {
  const navigate = useNavigate();

  return (
    <div className="Thanks">
      <h1>Thanks for Visting</h1>
      {massage && <p className="msg">{massage}</p>}
      <div className="emote">
        <FaPrayingHands />
      </div>
      <button
        className="btn-primary "
        onClick={() => {
          navigate("/");
        }}
      >
        Back To Home
      </button>
    </div>
  );
}

export default Thankspage;
