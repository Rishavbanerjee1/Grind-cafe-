import Link from "next/link";
import styles from "./home.module.css";

export const metadata = {
  title: "Good Coffee, Good Company",
  description: "Drop by The Daily Grind for carefully made coffee, fresh bakes and unhurried moments in Kolkata."
};

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Your neighbourhood coffee stop</p>
            <h1>Good coffee.<br /><em>Good company.</em></h1>
            <p className={styles.intro}>
              Come by for your morning coffee, a fresh bite or an easy catch-up.
              We’ll have something good on the table.
            </p>
            <div className={styles.actions}>
              <Link className="button buttonPrimary" href="/menu">View the menu <span aria-hidden="true">↗</span></Link>
              <Link className="button buttonOutline" href="/contact">Visit the café</Link>
            </div>
            <div className={styles.freshNote}><span /> Made fresh. Served with care.</div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.imageFrame}>
              <img
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1500&q=88"
                alt="A warm, plant-filled café with a welcoming coffee table"
                className={styles.heroImage}
              />
              <span className={styles.imageCaption}>A good place to take a break.</span>
            </div>
            <div className={styles.loveStamp} aria-label="Brewed with love">
              <span className={styles.stampHeart} aria-hidden="true">♥</span>
              <span className={styles.stampText}>Brewed with<br /><strong>love</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={`container ${styles.introGrid}`}>
          <p className="eyebrow">A little about us</p>
          <div>
            <h2>Good things happen<br /><em>around a table.</em></h2>
            <p>We believe a café should feel like a familiar pause in a busy day. Thoughtful coffee, honest food and a seat that’s always worth taking.</p>
            <Link className="textLink" href="/about">Get to know us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={`container ${styles.sectionHead}`}>
          <div><p className="eyebrow">A few favourites</p><h2>Made to be <em>enjoyed.</em></h2></div>
          <Link className="textLink" href="/menu">Explore the menu <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={`container ${styles.featureGrid}`}>
          <article className={styles.featureCard}>
            <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85" alt="Freshly prepared iced coffee" />
            <div><span>01 / Coffee</span><h3>The everyday favourite</h3><p>Comfort in a cup, made just the way you like it.</p></div>
          </article>
          <article className={styles.featureCard}>
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85" alt="Freshly baked bread and pastries" />
            <div><span>02 / From the oven</span><h3>A little something sweet</h3><p>Fresh bakes for slow mornings and afternoon breaks.</p></div>
          </article>
          <article className={styles.featureCard}>
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85" alt="Coffee being poured into a ceramic cup" />
            <div><span>03 / The ritual</span><h3>Take your time</h3><p>Good coffee is better when there’s nowhere to rush.</p></div>
          </article>
        </div>
      </section>

      <section className={styles.visitBand}>
        <div className="container">
          <p className="eyebrow">Your table is waiting</p>
          <h2>Make a little room<br /><em>for good moments.</em></h2>
          <Link className="button buttonLight" href="/contact">Find your way here <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
