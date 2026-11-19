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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)} aria-label="The Daily Grind home">
          <span className={styles.mark}>dg</span>
          <span className={styles.brandText}><strong>The Daily Grind</strong><small>COFFEE &amp; KITCHEN</small></span>
        </Link>
        <button className={styles.menuToggle} type="button" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
          <span></span><span></span>
        </button>
        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className={`${styles.navLink} ${pathname === link.href ? styles.current : ""}`}
              aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
          <Link className={styles.findButton} href="/contact" onClick={() => setOpen(false)}>Find us <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
