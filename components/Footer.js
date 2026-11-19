import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandBlock}>
          <div className={styles.logo}>dg.</div>
          <h2>Make room for<br/><em>good moments.</em></h2>
          <p>Thoughtful coffee, comforting food and a little space to slow down.</p>
        </div>
        <div><h3>Explore</h3><Link href="/about">Our story</Link><Link href="/menu">The menu</Link><Link href="/contact">Visit us</Link></div>
        <div><h3>Come by</h3><p>12 Garden Lane<br/>Kolkata, West Bengal</p><p>Every day<br/>8:00 AM – 9:00 PM</p></div>
        <div><h3>Say hello</h3><a href="mailto:hello@thedailygrind.example">hello@thedailygrind.example</a><a href="tel:+919000000000">+91 90000 00000</a><p className={styles.social}>Instagram&nbsp; · &nbsp;Facebook</p></div>
      </div>
      <div className={`container ${styles.bottom}`}><span>© {new Date().getFullYear()} The Daily Grind Café</span><span>Made for slow mornings and good company.</span></div>
    </footer>
  );
}
