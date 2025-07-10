"use client";

import styles from "./Gallery.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Gallery() {
  const imageRef = useRef([]);
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
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: -10,
      },
      { opacity: 1, y: 0 }
    );
  }, []);

  return (
    <section className={`${styles.gallerySection} container`}>
      <div className={styles.masonry}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Cafe image ${index + 1}`}
            className={`${styles.image} animate`}
            ref={(el) => (imageRef.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
}
