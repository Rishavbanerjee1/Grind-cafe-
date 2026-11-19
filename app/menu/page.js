import MenuBrowser from "@/components/MenuBrowser";
import styles from "./page.module.css";

export const metadata = {
  title: "The Menu",
  description: "Explore coffee, fresh bakes and comforting café favourites at The Daily Grind."
};

export default function MenuPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heading}>
        <div className="container">
          <p className="eyebrow">Something good is on the table</p>
          <h1>A menu for<br /><em>your kind of day.</em></h1>
          <p>From the first coffee to the last little bite, find something you’ll look forward to.</p>
        </div>
      </section>
      <section className={`container ${styles.menuSection}`}>
        <div className={styles.menuIntro}><h2>Made with care.<br /><em>Enjoyed your way.</em></h2><p>Take a look around. There’s always a good reason to stay for one more.</p></div>
        <MenuBrowser />
      </section>
    </div>
  );
}
