"use client";

import Loading from "../Loading/Loading";
import styles from "./HomeClient.module.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function HomeClient() {
  const loadingRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const contentRef = useRef();

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("pageLoaded") === "true";

    if (alreadyLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      if (loadingRef.current) {
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 1,
          scale: 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            sessionStorage.setItem("pageLoaded", "true");
            setLoading(false);
          },
        });
      } else {
        setLoading(false);
      }
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  });

  return (
    <>
      {loading ? (
        <Loading ref={loadingRef} />
      ) : (
        <div className={`${styles.about} container`} ref={contentRef}>
          <div className={styles.hero}>
            <div className={styles.overlay}>
              <h1 className={styles.title}>Welcome To</h1>
              <div className={styles.logo}>
                <Image
                  src="/compressed/logoCropped.webp"
                  alt="Daydream logo"
                  fill
                  className={styles.logoImg}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className={styles.subtitle}>
                Speciality Coffee and Italian Deli
              </h3>

              <div className={styles.text}>
                <p>
                  Created in 2025 by two obsessive home chefs, our mission is to
                  bring our passions together: speciality coffee and Italian
                  food.
                </p>
                <p>
                  In the heart of East London, Daydream Café is a celebration of
                  Italian ingredients, pour over coffee and slow mornings.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
