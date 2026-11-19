import Link from "next/link";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menu";
import styles from "./home.module.css";

export const metadata = {
  title: "Good Coffee, Slow Moments",
  description: "Discover The Daily Grind Café: thoughtfully brewed coffee, fresh seasonal plates and a warm neighbourhood atmosphere."
};

export default function HomePage() {
  const favourites = menuItems.filter(item => [1, 3, 5].includes(item.id));
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">A neighbourhood café</span>
            <h1>Good coffee.<br/><em>Slow moments.</em></h1>
            <p>A little pause in the middle of everything. Come in for your favourite cup, stay for one more conversation.</p>
            <div className={styles.actions}><Link className="btn" href="/menu">Explore our menu <span>↗</span></Link><Link className="btn btn--outline" href="/about">Our story</Link></div>
            <div className={styles.note}><span className={styles.noteLine}></span><span>Freshly made, thoughtfully served.</span></div>
          </div>
          <div className={styles.heroVisual}>
            <img className={styles.heroImage} src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1400&q=90" alt="Warm, sunlit neighbourhood café interior" fetchPriority="high"/>
            <div className={styles.stamp}><span>BREWED WITH</span><strong>♥</strong><span>INTENTION</span></div>
          </div>
        </div>
        <div className={styles.heroBottom}><span>EST. 2024</span><span>COFFEE · KITCHEN · COMMUNITY</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className={styles.intro}>
        <div className="container">
          <div className="section-heading"><span className="eyebrow">More than a coffee stop</span><h2>Your everyday place<br/>to feel a little more <em>at home.</em></h2><p>Good things happen when thoughtful ingredients, familiar faces and a welcoming space come together.</p></div>
          <div className={styles.values}>
            <article><span>01</span><h3>Thoughtful brews</h3><p>Carefully selected beans, dialled-in espresso and cups made just the way you like them.</p></article>
            <article><span>02</span><h3>Fresh from our kitchen</h3><p>Comforting plates, seasonal ingredients and little treats worth taking your time over.</p></article>
            <article><span>03</span><h3>A place to belong</h3><p>Bring your book, meet a friend or simply take a breath. There's room for you here.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.favourites}>
        <div className="container">
          <div className={styles.sectionTop}><div><span className="eyebrow">A few favourites</span><h2>Made to make<br/><em>your day.</em></h2></div><Link className="btn btn--outline" href="/menu">See the full menu ↗</Link></div>
          <div className={styles.menuGrid}>{favourites.map(item => <MenuCard key={item.id} item={item}/>)}</div>
        </div>
      </section>

      <section className={styles.quote}>
        <div className="container"><span className="eyebrow">The daily ritual</span><p>“Somewhere between the first sip and the last bite, the day starts to feel like yours again.”</p><span className={styles.quoteBy}>A LITTLE NOTE FROM OUR TABLE</span></div>
      </section>

      <section className={styles.visit}>
        <div className={`container ${styles.visitGrid}`}>
          <div><span className="eyebrow">Your seat is waiting</span><h2>Come as you are.<br/><em>Stay a little.</em></h2><p>Drop in for a quick coffee or make an afternoon of it. We’ll keep the kettle warm.</p><Link className="btn" href="/contact">Plan your visit ↗</Link></div>
          <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=85" alt="Barista preparing a freshly brewed cup of coffee" loading="lazy"/>
        </div>
      </section>
    </>
  );
}
