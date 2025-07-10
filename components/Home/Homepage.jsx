"use client";

import styles from "./Homepage.module.css";
import { useState, useRef, useEffect } from "react";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Menu from "../Menu/Menu";
import LandingPage from "../LandingPage/LandingPage";
import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Homepage() {
  const [activeTab, setActiveTab] = useState(null);
  const bgColor = ["#FF6F61", "#00A39B", "#CC5500", "#C70039"];

  const images = ["/about.png", "/menu2.png", "/menu.png", "/batch3.webp"];

  const [currentColor, setCurrentColor] = useState(bgColor[0]);
  const [currentImage, setCurrentImage] = useState(images[0]);

  const components = [LandingPage, About, Menu, Gallery, Contact];
  const [index, setIndex] = useState(0);
  const ComponentToRender = components[index];

  function handleMouseEnter(index) {
    setCurrentColor(bgColor[index]);
  }

  function handleSelect(tab, index) {
    setActiveTab(tab);
    setIndex(index);
  }

  const navRef = useRef([]);
  const titleRef = useRef();

  const entranceAnimRef = useRef([]);

  useLayoutEffect(() => {
    gsap.fromTo(
      entranceAnimRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        delay: 0,
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      navRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
    );
  }, []);

  return (
    <section className={styles.menu}>
      <div
        className={styles.navContainer}
        style={{ backgroundColor: currentColor }}
        ref={(el) => (entranceAnimRef.current[1] = el)}
      >
        <div className={styles.title} ref={titleRef}>
          <div className={styles.logo}>
            <img
              src="./logoCropped.png"
              alt="Daydream logo"
              onClick={() => handleSelect("LandingPage", 0)}
            ></img>
          </div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li
              onMouseEnter={() => handleMouseEnter(0)}
              className={activeTab === "About" ? `${styles.active}` : ""}
              onClick={() => handleSelect("About", 1)}
              ref={(el) => (navRef.current[0] = el)}
            >
              About
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(1)}
              className={activeTab === "Menu" ? `${styles.active}` : ""}
              onClick={() => handleSelect("Menu", 2)}
              ref={(el) => (navRef.current[1] = el)}
            >
              Menu
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(2)}
              className={activeTab === "Gallery" ? `${styles.active}` : ""}
              onClick={() => handleSelect("Gallery", 3)}
              ref={(el) => (navRef.current[2] = el)}
            >
              Gallery
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(3)}
              className={activeTab === "Contact" ? `${styles.active}` : ""}
              onClick={() => handleSelect("Contact", 4)}
              ref={(el) => (navRef.current[3] = el)}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={styles.display}
        ref={(el) => (entranceAnimRef.current[0] = el)}
      >
        <ComponentToRender />
      </div>
    </section>
  );
}
