"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our story" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)} aria-label="The Daily Grind Café home">
          <span className={styles.mark}>dg</span>
          <span><strong>The Daily Grind</strong><small>COFFEE & KITCHEN</small></span>
        </Link>
        <button className={styles.toggle} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
        <nav id="main-navigation" className={`${styles.nav} ${open ? styles.open : ""}`} aria-label="Main navigation">
          {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link className={styles.cta} href="/contact" onClick={() => setOpen(false)}>Find us <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
