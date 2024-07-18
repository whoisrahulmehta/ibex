import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="Error">
      <p>OOPSSS ! You were not supossed to be here</p>
      <p>404</p>
      <p>Let's go back home </p>
      <button className="btn-primary " onClick={() => navigate("/")}>
        Home Page
      </button>
    </div>
  );
}

export default Error;
