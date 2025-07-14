"use client";
import styles from "./About.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className={`${styles.aboutSection} container`}>
      <div className={styles.aboutGrid}>
        <div
          className={styles.textColumn}
          ref={(el) => (sectionRef.current[0] = el)}
        >
          <div className={styles.logo}>
            {" "}
            <Image
              src="/compressed/inkblotCropped.webp"
              alt="Daydream Cafe Logo"
              fill
              className={styles.logoImg}
              style={{ objectFit: "contain" }}
            />
          </div>

          <p>
            <span className={styles.highlight}> Daydream Cafe</span> was born in
            2025 from our shared love of speciality coffee and Italian food.
            Founded by two musicians who swapped touring for batch brews and
            pasta doughs, the cafe is a reflection of everything we’ve always
            loved — rich pour overs, homemade Italian bites and a relaxed
            atmosphere that encourages you to lose track of time.
          </p>
          <div className={styles.imageStack}>
            <div className={`${styles.imageStackItem} ${styles.top}`}>
              <Image
                ref={(el) => (sectionRef.current[1] = el)}
                src="/compressed/founders.webp"
                alt="The founders of Daydream"
                className={styles.mobileImg}
                width={800}
                height={582}
                style={{ aspectRatio: 800 / 582 }}
              />
            </div>
            <div className={`${styles.imageStackItem} ${styles.bottom}`}>
              {" "}
              <Image
                ref={(el) => (sectionRef.current[1] = el)}
                src="/compressed/exterior.webp"
                alt="The exterior of Daydream"
                className={styles.mobileImg}
                width={800}
                height={1200}
                style={{ aspectRatio: 800 / 1200 }}
              />
            </div>
          </div>

          <p>
            For years, we talked about opening a space where creativity and
            community could blend — a place where people could just daydream.
            After endless cups of coffee and a few late-night pasta sessions,
            Daydream Cafe finally opened its doors.
          </p>
          <p>
            We serve specialty coffee, carefully brewed by hand, alongside
            homemade seasonal dishes. Whether you're grabbing a coffee to go or
            settling in with a book we hope you feel at home here.
          </p>
        </div>

        <div className={styles.imageGrid}>
          <Image
            ref={(el) => (sectionRef.current[2] = el)}
            src="/compressed/founders.webp"
            alt="Rich & Tom, founders of Daydream"
            className={styles.img}
            width={800}
            height={582}
            style={{ aspectRatio: 800 / 582 }}
          />
          <Image
            ref={(el) => (sectionRef.current[3] = el)}
            src="/compressed/exterior.webp"
            alt="Daydream Café storefront"
            className={styles.img}
            width={800}
            height={1200}
            style={{ aspectRatio: 800 / 1200 }}
          />
        </div>
      </div>
    </div>
  );
}
