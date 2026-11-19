"use client";

import { useMemo, useState } from "react";
import { menuItems } from "@/data/menu";
import styles from "./MenuBrowser.module.css";

const categories = ["All", "Coffee", "Bakery", "Kitchen"];

export default function MenuBrowser() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => active === "All" ? menuItems : menuItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <div>
      <div className={styles.filters} role="group" aria-label="Filter menu by category">
        {categories.map((category) => (
          <button key={category} type="button" onClick={() => setActive(category)}
            className={`${styles.filter} ${active === category ? styles.active : ""}`}
            aria-pressed={active === category}>
            {category}
          </button>
        ))}
      </div>
      <div className={styles.menuGrid}>
        {filtered.map((item) => (
          <article className={styles.item} key={item.id}>
            <div className={styles.itemTop}>
              <div><span className={styles.category}>{item.category}</span><h3>{item.name}</h3></div>
              <strong>{item.price}</strong>
            </div>
            <p>{item.description}</p>
            {item.tag && <span className={styles.tag}>{item.tag}</span>}
          </article>
        ))}
      </div>
      <p className={styles.note}>A note: menu and prices are sample content and can be edited in <code>data/menu.js</code>.</p>
    </div>
  );
}
