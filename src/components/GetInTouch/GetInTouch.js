import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./getInTouch.css";

const GetInTouch = ({getInTouch}) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_15s75dg",
        "template_clc78n8",
        e.target,
        "E-7RqaUG4NcsTjFMM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="get-in-touch_container container" ref={getInTouch}>
      <h2 className="section-label">Get in Touch</h2>
      {!sent ? (
        <form className="get-in-touch" onSubmit={sendEmail}>
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Name"
            required
            onChange={handleChange}
            value={formData.user_name}
          />

          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={formData.user_email}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            onChange={handleChange}
            value={formData.message}
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      ) : (
        <p>Thank you for your message!</p>
      )}
    </section>
  );
};

export default GetInTouch;
