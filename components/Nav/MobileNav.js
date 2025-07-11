"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import styles from "./MobileNav.module.css";
import Image from "next/image";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const menuItemRef = useRef([]);
  const router = useRouter();
  const pathname = usePathname();

  const [currentColor, setCurrentColor] = useState("#FF6F61");

  const navItems = [
    { label: "About", path: "/About", color: "#FF6F61" },
    { label: "Menu", path: "/Menu", color: "#00A39B" },
    { label: "Gallery", path: "/Gallery", color: "#CC5500" },
    { label: "Contact", path: "/Contact", color: "#C70039" },
  ];

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuItemRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, delay: 0.1, ease: "power3.out" }
      );

      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.2, ease: "power3.out" }
      );
    } else {
      gsap.fromTo(
        menuItemRef.current,
        { opacity: 1, y: 0 },
        { opacity: 0, duration: 0.1, ease: "power2.out" }
      );

      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });
    }
  }, [open]);

  const handleNavigate = (path, color) => {
    setOpen(false);
    router.push(path);
    setTimeout(() => {
      setCurrentColor(color);
    }, 1500);
  };

  return (
    <>
      <button
        className={`${styles.toggleButton} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <div
        className={styles.menuOverlay}
        ref={menuRef}
        style={{ background: currentColor }}
      >
        <div className={styles.logo}>
          {" "}
          <Image
            src="/compressed/logoCropped.webp"
            alt="Daydream logo"
            fill
            className={styles.logoImg}
            onClick={() => handleNavigate("/", "#FF6F61")}
            ref={(el) => (menuItemRef.current[4] = el)}
          />
        </div>

        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li
              key={item.path}
              className={pathname === item.path ? styles.active : ""}
              onClick={() => handleNavigate(item.path, item.color)}
              ref={(el) => (menuItemRef.current[index] = el)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
