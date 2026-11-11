import { useEffect, useState } from "react";
import { COMPANY, NAV_ITEMS } from "../data/site";
import { ArrowRight, Close, LogoMark, Menu } from "./Icons";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a href="/" className="site-header__brand" aria-label={`${COMPANY.fullName} ana sayfa`}>
          <LogoMark size={40} className="site-header__logo" />
          <span className="site-header__brand-text">
            <span className="site-header__brand-name">Çiçek Mühendislik</span>
            <span className="site-header__brand-sub">Eğitim ve Danışmanlık</span>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="Birincil menü">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={item.href} className="site-header__nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href="/#store" className="btn btn--primary site-header__cta">
            Dokümanları Keşfet
            <ArrowRight size={16} />
          </a>
          <button
            className="site-header__menu-btn"
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${open ? "is-open" : ""}`} role="dialog" aria-label="Mobil menü">
        <nav className="mobile-nav__list">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="mobile-nav__link"
              onClick={() => setOpen(false)}
            >
              {item.label}
              <ArrowRight size={18} />
            </a>
          ))}
          <a
            href="/#store"
            className="btn btn--primary mobile-nav__cta"
            onClick={() => setOpen(false)}
          >
            Dokümanları Keşfet
            <ArrowRight size={16} />
          </a>
        </nav>
      </div>
      {open && <div className="mobile-nav__backdrop" onClick={() => setOpen(false)} aria-hidden />}
    </header>
  );
}
