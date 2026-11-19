"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Visit Us" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)} aria-label="The Daily Grind Café home">
          <span className={styles.mark}>dg.</span>
          <span><strong>The Daily Grind</strong><small>COFFEE · KITCHEN · COMMUNITY</small></span>
        </Link>
        <button className={styles.toggle} aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={`${styles.nav} ${open ? styles.open : ""}`} aria-label="Main navigation">
          {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link className={styles.cta} href="/contact" onClick={() => setOpen(false)}>Find a table <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
