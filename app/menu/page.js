"use client";
import { useMemo, useState } from "react";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menu";
import styles from "./menu.module.css";

export default function MenuPage() {
  const categories = ["All", "Breakfast", "Coffee", "Lunch", "Dessert"];
  const [active, setActive] = useState("All");
  const visibleItems = useMemo(() => active === "All" ? menuItems : menuItems.filter(item => item.category === active), [active]);
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">Fresh from our kitchen</span><h1>A menu for every mood.</h1><p>From the first coffee of the day to the little something you didn’t know you needed.</p></div></section>
      <section className={`container ${styles.menuSection}`}>
        <div className={styles.filters} aria-label="Filter menu by category">
          {categories.map(category => <button key={category} className={active === category ? styles.active : ""} onClick={() => setActive(category)} aria-pressed={active === category}>{category}</button>)}
        </div>
        <p className={styles.count}>Showing {visibleItems.length} {visibleItems.length === 1 ? "item" : "items"}</p>
        <div className={styles.grid}>{visibleItems.map(item => <MenuCard key={item.id} item={item}/>)}</div>
        <p className={styles.disclaimer}>Menu and prices are sample content for this demonstration and may be updated by the café.</p>
      </section>
    </>
  );
}
