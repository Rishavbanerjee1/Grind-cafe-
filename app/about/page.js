import Link from "next/link";
import styles from "./about.module.css";

export const metadata = {
  title: "Our Story",
  description: "Meet The Daily Grind Café: a neighbourhood space built around good coffee, honest food and community."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">A little about us</span><h1>Rooted in good things.</h1><p>We believe the best parts of a day are often the simplest: a familiar face, a warm cup and nowhere else you need to be.</p></div></section>
      <section className={`container ${styles.story}`}>
        <div className={styles.photo}><img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=85" alt="Cosy café interior with warm natural light"/></div>
        <div className={styles.copy}><span className="eyebrow">Our beginning</span><h2>A café made for the <em>everyday.</em></h2><p>The Daily Grind started with a simple thought: neighbourhoods deserve places that feel like an extension of home. Somewhere you can ease into the morning, catch up with a friend or find a quiet corner to get things done.</p><p>So we built a space around the things we care about: carefully made coffee, fresh food, warm hospitality and the small rituals that make ordinary days special.</p><Link href="/menu" className="btn">See what’s cooking ↗</Link></div>
      </section>
      <section className={styles.promise}><div className="container"><span className="eyebrow">What matters to us</span><h2>Simple things, done<br/><em>with care.</em></h2><div className={styles.promiseGrid}><article><b>01</b><h3>Quality without fuss</h3><p>Good ingredients and considered preparation, without making a big deal of it.</p></article><article><b>02</b><h3>Warmth in every detail</h3><p>From the first hello to the last sip, we want you to feel welcome.</p></article><article><b>03</b><h3>Part of the neighbourhood</h3><p>A place for regulars, first-timers, old friends and new beginnings.</p></article></div></div></section>
    </>
  );
}
