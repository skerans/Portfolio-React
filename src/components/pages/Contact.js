import React from "react";
import { useState } from "react";
import '../../styles/Contact.css'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        return setName(value);
      case "email":
        return setEmail(value);
      case "message":
        return setMessage(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    console.log("form submitted");
  };

  return (
    <div 
    className="container">
      <form>
        <h2>Contact Me</h2>
        <label>
          Name:
          <br/>
          <input
            className="contact-form"
            type="text"
            value={name}
            name="username"
            onChange={handleInputChange}
            placeholder="name"
          />
        </label>
        <br/>
        <label>
          Email:
          <br/>
          <input
            className="contact-form"
            type="email"
            value={email}
            name="email"
            onChange={handleInputChange}
            placeholder="email address"
          />
        </label>
        <br/>
        <label>
          Message:
          <br/>
          <textarea
            className="contact-form"
            name="message"
            value={message}
            onChange={handleInputChange}
            placeholder="message"
          />
        </label>
        <br/>
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
