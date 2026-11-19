import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export const metadata = {
  title: "Visit & Contact",
  description: "Find The Daily Grind Café in Kolkata, check our opening hours or send us a note."
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heading}>
        <div className="container">
          <p className="eyebrow">Come on in</p>
          <h1>We’d love to<br /><em>see you here.</em></h1>
          <p>Drop by for a coffee, stay for a while or simply say hello.</p>
        </div>
      </section>
      <section className={`container ${styles.contactGrid}`}>
        <div className={styles.details}>
          <p className="eyebrow">Find the café</p>
          <h2>Come as you are.</h2>
          <div><span>Address</span><p>12 Garden Lane<br />Kolkata, West Bengal, India</p></div>
          <div><span>Opening hours</span><p>Every day<br />8:00 AM – 9:00 PM</p></div>
          <div><span>Say hello</span><p><a href="mailto:hello@thedailygrind.example">hello@thedailygrind.example</a><br /><a href="tel:+919000000000">+91 90000 00000</a></p></div>
          <p className={styles.smallNote}>Address, contact details and opening hours are placeholders. Replace them before publishing.</p>
        </div>
        <div className={styles.formWrap}><p className="eyebrow">Leave us a note</p><h2>What’s on your mind?</h2><ContactForm /></div>
      </section>
    </div>
  );
}
