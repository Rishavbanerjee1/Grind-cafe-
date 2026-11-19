import Link from "next/link";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menu";
import styles from "./home.module.css";

export const metadata = {
  title: "Good Coffee, Made with Care",
  description: "Visit The Daily Grind for carefully prepared coffee, a relaxed neighbourhood atmosphere and a menu made for everyday visits."
};

export default function HomePage() {
  const favourites = menuItems.filter(item => [1, 3, 5].includes(item.id));
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">Your neighbourhood coffee stop</span>
            <h1>Good coffee.<br/><em>Good company.</em></h1>
            <p>Come by for your morning coffee, a fresh bite or an easy catch-up. We’ll have something good on the table.</p>
            <div className={styles.actions}><Link className="btn" href="/menu">View the menu <span>↗</span></Link><Link className="btn btn--outline" href="/contact">Visit the café</Link></div>
            <div className={styles.note}><span className={styles.noteLine}></span><span>Made fresh. Served with care.</span></div>
          </div>
          <div className={styles.heroVisual}>
            <img className={styles.heroImage} src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1400&q=90" alt="Daylit café interior with wooden tables and coffee bar" fetchPriority="high"/>
            <span className={styles.imageCaption}>A good place to take a break.</span>
          </div>
        </div>
        <div className={styles.heroBottom}><span>COFFEE, BREAKFAST & MORE</span><span>MADE FOR EVERYDAY VISITS</span><span>OPEN DAILY · 8 AM–9 PM</span></div>
      </section>

      <section className={styles.intro}>
        <div className="container">
          <div className="section-heading"><span className="eyebrow">What you’ll find here</span><h2>A café that keeps things <em>simple.</em></h2><p>Good ingredients, a thoughtful cup of coffee and a comfortable place to spend a little time.</p></div>
          <div className={styles.values}>
            <article><span>01</span><h3>Coffee, done properly</h3><p>Espresso, cold coffee and familiar favourites, prepared carefully and served just how you like them.</p></article>
            <article><span>02</span><h3>Something to eat</h3><p>Breakfast plates, sandwiches and a few sweet things for when coffee needs company.</p></article>
            <article><span>03</span><h3>Room to settle in</h3><p>Stop in on your own, meet someone or take a little time out of a busy day.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.favourites}>
        <div className="container">
          <div className={styles.sectionTop}><div><span className="eyebrow">From the menu</span><h2>House <em>favourites.</em></h2></div><Link className="btn btn--outline" href="/menu">Browse everything ↗</Link></div>
          <div className={styles.menuGrid}>{favourites.map(item => <MenuCard key={item.id} item={item}/>)}</div>
        </div>
      </section>

      <section className={styles.quote}>
        <div className="container"><span className="eyebrow">A note from the café</span><p>“Take your time. Your coffee isn’t going anywhere.”</p><span className={styles.quoteBy}>THE DAILY GRIND</span></div>
      </section>

      <section className={styles.visit}>
        <div className={`container ${styles.visitGrid}`}>
          <div><span className="eyebrow">Find us</span><h2>Your usual table<br/><em>is waiting.</em></h2><p>Check our opening hours, find the café and get in touch before you visit.</p><Link className="btn" href="/contact">Plan your visit ↗</Link></div>
          <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=85" alt="Barista preparing coffee at the café counter" loading="lazy"/>
        </div>
      </section>
    </>
  );
}
