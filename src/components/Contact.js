import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        form,
        "your_public_key"
      )
      .then(
        () => {
          alert("Message sent ✅");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send ❌", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
