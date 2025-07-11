"use client";

import styles from "./Sidebar.module.css";
import { useState, useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const [currentColor, setCurrentColor] = useState("#FF6F61");

  const navItems = [
    { label: "About", path: "/About", color: "#FF6F61" },
    { label: "Menu", path: "/Menu", color: "#00A39B" },
    { label: "Gallery", path: "/Gallery", color: "#CC5500" },
    { label: "Contact", path: "/Contact", color: "#C70039" },
  ];

  const titleRef = useRef();
  const sidebarRef = useRef();
  const navRef = useRef([]);

  useLayoutEffect(() => {
    const loaded = sessionStorage.getItem("pageLoaded");
    let delay = 2.5;

    if (loaded === "true") {
      delay = 0;
    }

    gsap.fromTo(
      navRef.current,
      { opacity: 0, x: 50, delay: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: delay,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, delay: delay + 0.1, ease: "power2.out" }
    );
  }, []);

  return (
    <div className={styles.sideBar}>
      <div
        className={styles.navContainer}
        style={{ backgroundColor: currentColor }}
        ref={sidebarRef}
      >
        <div className={styles.title} ref={titleRef}>
          <div className={styles.logo}>
            <Image
              src="/compressed/logoCropped.webp"
              fill
              alt="Daydream logo"
              onClick={() => router.push("/")}
            />
          </div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item, i) => (
              <li
                key={item.label}
                onMouseEnter={() => setCurrentColor(item.color)}
                className={pathname === item.path ? styles.active : ""}
                onClick={() => router.push(item.path)}
                ref={(el) => (navRef.current[i] = el)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
