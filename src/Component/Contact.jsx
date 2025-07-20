import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import '../CSS/contact.css'

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const Contact = () => {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    } else if (error.email) {
      return;
    }

    setIsLoading(true);

    try {
      // Replace with your actual backend or Repl API endpoint
      const response = await fetch("https://formspree.io/f/xvgqgqra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setUserInput({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      alert("Network error. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (<div id="contact">
    <div className="skills-header">
      <hr className="line" />
      <span className="skills-title">Contact with me</span>
      <hr className="line" />
    </div>
    <div className="contact12">
      <div className="contact-container" >
        {/* <p className="contact-heading">Contact with me</p> */}
        <div className="contact-box">
          <p className="contact-desc">
            If you have any questions or concerns, please don't hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests.
          </p>

          <form className="contact-form" onSubmit={handleSendMail}>
            <div className="form-group">
              <label>Your Name:</label>
              <input
                type="text"
                required
                value={userInput.name}
                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                onBlur={checkRequired}
              />
            </div>

            <div className="form-group">
              <label>Your Email:</label>
              <input
                type="email"
                required
                value={userInput.email}
                onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                onBlur={() => {
                  checkRequired();
                  setError((prev) => ({
                    ...prev,
                    email: !isValidEmail(userInput.email),
                  }));
                }}
              />
              {error.email && (
                <p className="error-text">Please provide a valid email!</p>
              )}
            </div>

            <div className="form-group">
              <label>Your Message:</label>
              <textarea
                rows="4"
                required
                value={userInput.message}
                onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                onBlur={checkRequired}
              />
            </div>

            {error.required && (
              <p className="error-text">All fields are required!</p>
            )}

            

            <button className="send-button" disabled={isLoading}>
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <TbMailForward />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <div>
          <img draggable="false" src="thanku1.png" alt="Uday" className="imgthank" />
        </div>
    </div>
  </div>
  );
};

export default Contact