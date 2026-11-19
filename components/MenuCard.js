import styles from "./MenuCard.module.css";

export default function MenuCard({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={item.image} alt={item.alt} loading="lazy" />
        {item.tag && <span className={styles.tag}>{item.tag}</span>}
      </div>
      <div className={styles.details}>
        <div><h3>{item.name}</h3><p>{item.description}</p></div>
        <strong>₹{item.price}</strong>
      </div>
    </article>
  );
}
