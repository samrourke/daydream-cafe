"use client";

import styles from "./LandingPage.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function LandingPage() {
  const overlayRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      {
        opacity: 0,
        x: 50,

        ease: "power2.out",
      },
      { opacity: 1, x: 0, duration: 1, delay: 0.3 }
    );
  }, []);
  return (
    <div className={`${styles.about} container`}>
      <div className={styles.hero} ref={overlayRef}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Welcome To</h1>
          <div className={styles.logo}>
            <img
              src="./logoCropped.png"
              alt="Daydream logo"
              onClick={() => handleSelect("LandingPage", 0)}
            ></img>
          </div>
          <h3 className={styles.subtitle}>
            Speciality Coffee and Italian Deli
          </h3>

          <div className={styles.text}>
            {" "}
            <p>
              Created in 2025 by two obsessive home chefs, our mission is to
              bring our passions together: speciality coffee and Italian food.
            </p>
            <p>
              In the heart of East London, Daydream Café is a celebration of
              Italian ingredients, pour over coffee and slow mornings.
            </p>
          </div>
        </div>
      </div>

      {/* <div className={styles.imageGrid}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="/batch1.jpg"></img>
        </div>
        <div className={styles.imgContainer}>
          {" "}
          <img className={styles.img} src="/batch2.jpeg"></img>
        </div>
        <div className={styles.imgContainer}>
          {" "}
          <img className={styles.img} src="/batch3.webp"></img>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="/batch4.jpeg"></img>{" "}
        </div>
      </div> */}
    </div>
  );
}
