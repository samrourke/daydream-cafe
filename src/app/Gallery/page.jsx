"use client";

import styles from "./Gallery.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Gallery() {
  const imageRef = useRef([]);
  const containerRef = useRef();
  const images = [
    "/bruschetta.webp",
    "/pourover.jpg",
    "/salad.jpg",
    "/bomboloni.jpg",
    "fritatta.jpg",
    "/scacce.png",
    "/exterior.png",
    "/chemex.webp",
    "/pizzette.webp",
    "/v60.jpeg",
    "/salad2.webp",
    "/pourOver.avif",
    "/pizzette2.webp",
    "/caprese.jpg",
    "/interior.png",
    "fritatta2.jpg",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.2,
              ease: "power2.out",
            });
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    imageRef.current.forEach((el) => {
      if (el) {
        gsap.set(el, { opacity: 0, y: 30 }); // initial state
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={`${styles.gallerySection} container`}
      ref={containerRef}
    >
      <div className={styles.masonry}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Cafe image ${index + 1}`}
            className={`${styles.image}`}
            ref={(el) => (imageRef.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
}
