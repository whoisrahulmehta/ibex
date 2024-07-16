import React, { useState } from "react";


function Join() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e412f675-c579-4e4f-bfcf-b14799096740");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Join">
      <section className="letter">
        <h1>
          Contact Team <b>IBEX </b>
        </h1>
        <form onSubmit={onSubmit}>
          <p>
            <span>
              Hello my name is{" "}
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Your Name"
                required
              />
              .
            </span>
            <span>
              I belong to{" "}
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Himachal Pradesh"
                required
              />{" "}
              state of{" "}
              <input
                type="text"
                name="country"
                id="country"
                placeholder="India"
                required
              />
              .
            </span>
            <span>
              I am a{" "}
              <input
                type="text"
                name="profession"
                id="profession"
                placeholder="Business Owner"
                required
              />
              .
            </span>
            <span>
              You can contact me at my email :{" "}
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="bloggy@bloggy.com"
                required
              />
            </span>
            <span>
              Or can directly call me on my phone :{" "}
              <input
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="+91 72788-66777"
                required
              />
              .
            </span>
          </p>
          <p>Regards !</p>
          <button type="submit">Get A Response</button>
        </form>
      </section>
    </div>
  );
}

export default Join;
