"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* Left links */}
        <div className="nav-links-left">
          <Link href="/sobre">PORTFÓLIO</Link>
          <a href="https://www.instagram.com/danielemioranza/" target="_blank" rel="noopener">
            INSTAGRAM
          </a>
        </div>

        {/* Center logo */}
        <div className="nav-logo-wrap">
          <Link href="/">
            <Image
              src="/images/logo-branco.webp"
              alt="Daniele Mioranza"
              width={180}
              height={34}
              className="nav-logo"
              priority
            />
          </Link>
        </div>

        {/* Right links */}
        <div className="nav-links-right">
          <a href="#fashion">FASHION</a>
          <a href="#publicidade">PUBLICIDADE</a>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(true)}
          aria-label="Menu"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: "4px",
            display: "none",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span style={{ width: 24, height: 1.5, background: "#fff", display: "block" }} />
          <span style={{ width: 24, height: 1.5, background: "#fff", display: "block" }} />
          <span style={{ width: 24, height: 1.5, background: "#fff", display: "block" }} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="nav-overlay">
          <button className="nav-overlay-close" onClick={() => setOpen(false)}>×</button>
          <Link href="/sobre" onClick={() => setOpen(false)}>SOBRE</Link>
          <a
            href="https://www.instagram.com/danielemioranza/"
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
          >
            INSTAGRAM
          </a>
          <a href="#fashion" onClick={() => setOpen(false)}>FASHION</a>
          <a href="#publicidade" onClick={() => setOpen(false)}>PUBLICIDADE</a>
        </div>
      )}
    </>
  );
}
