"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <div className={styles.success} role="status">
      <span aria-hidden="true">♥</span>
      <h3>Thanks for stopping by.</h3>
      <p>Your message has been prepared in this demo. Connect a backend or email service to receive real submissions.</p>
      <button className="button buttonOutline" type="button" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}>Send another message</button>
    </div>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>Your name<input name="name" value={form.name} onChange={update} placeholder="How should we call you?" required /></label>
      <label>Email address<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label>
      <label>Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell us what's on your mind..." rows="5" required /></label>
      <button className="button buttonPrimary" type="submit">Send a note <span aria-hidden="true">↗</span></button>
      <p className={styles.disclaimer}>Demo form only — no message is sent or stored yet.</p>
    </form>
  );
}
