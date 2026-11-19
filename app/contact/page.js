import ContactForm from "@/components/ContactForm";
import styles from "./contact.module.css";

export const metadata = {
  title: "Visit Us & Get in Touch",
  description: "Find The Daily Grind Café, check our opening hours or send us a message. We'd love to see you."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">We’d love to see you</span><h1>Come on in.</h1><p>Whether it’s your first visit or your fiftieth, there’s always a seat for you.</p></div></section>
      <section className={`container ${styles.contact}`}>
        <div className={styles.info}>
          <span className="eyebrow">Find your way here</span><h2>Good coffee is<br/><em>closer than you think.</em></h2>
          <div className={styles.infoBlock}><b>Visit</b><p>12 Garden Lane<br/>Kolkata, West Bengal, India</p></div>
          <div className={styles.infoBlock}><b>Opening hours</b><p>Monday – Sunday<br/>8:00 AM – 9:00 PM</p></div>
          <div className={styles.infoBlock}><b>Get in touch</b><p><a href="tel:+919000000000">+91 90000 00000</a><br/><a href="mailto:hello@thedailygrind.example">hello@thedailygrind.example</a></p></div>
          <div className={styles.map}><span>YOUR NEIGHBOURHOOD CAFÉ</span><strong>12 Garden Lane</strong><small>Kolkata · West Bengal</small></div>
        </div>
        <div className={styles.formWrap}><h2>Drop us a note.</h2><p>Questions, feedback or just saying hello — our inbox is open.</p><ContactForm/></div>
      </section>
    </>
  );
}
