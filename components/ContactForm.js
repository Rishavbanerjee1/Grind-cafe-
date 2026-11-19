"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("Thanks for reaching out! This demo form is ready to connect to an email or booking service.");
    form.reset();
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>Your name<input name="name" type="text" placeholder="e.g. Alex Morgan" required minLength="2"/></label>
      <label>Email address<input name="email" type="email" placeholder="you@example.com" required/></label>
      <label>What’s on your mind?<select name="subject" defaultValue="General enquiry"><option>General enquiry</option><option>Table reservation</option><option>Feedback</option><option>Something else</option></select></label>
      <label>Your message<textarea name="message" rows="4" placeholder="Write your message here..." required minLength="8"/></label>
      <button className="btn" type="submit">Send your message ↗</button>
      {status && <p className={styles.success} role="status">{status}</p>}
      <small>This is a frontend demo. Messages are not sent or stored yet.</small>
    </form>
  );
}
