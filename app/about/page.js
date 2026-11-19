import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Our Story",
  description: "The story behind The Daily Grind Café: good coffee, thoughtful food and a welcoming neighbourhood table."
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heading}>
        <div className="container">
          <p className="eyebrow">A place to feel at home</p>
          <h1>Not just a coffee stop.<br /><em>A familiar little pause.</em></h1>
          <p>We made The Daily Grind for the everyday moments that deserve a little more attention.</p>
        </div>
      </section>
      <section className={`container ${styles.story}`}>
        <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=85" alt="Coffee being prepared behind a café counter" />
        <div>
          <p className="eyebrow">The thought behind the cup</p>
          <h2>Simple things,<br /><em>done with care.</em></h2>
          <p>Some days call for a strong cup and a quiet corner. Others call for a long conversation, something warm from the oven and one more coffee. We wanted to make room for all of it.</p>
          <p>Our approach is uncomplicated: thoughtful ingredients, a welcoming space and the kind of service that makes you want to come back.</p>
          <Link className="button buttonPrimary" href="/menu">See what’s brewing <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className={styles.values}>
        <div className="container">
          <p className="eyebrow">What matters here</p>
          <div className={styles.valueGrid}>
            <article><span>01</span><h3>Good ingredients</h3><p>We keep the focus on freshness, flavour and the little details.</p></article>
            <article><span>02</span><h3>Time well spent</h3><p>No rush, no fuss. Just a comfortable place to take a breather.</p></article>
            <article><span>03</span><h3>Warm welcomes</h3><p>Come as you are. There’s always room for one more at the table.</p></article>
          </div>
        </div>
      </section>
    </div>
  );
}
