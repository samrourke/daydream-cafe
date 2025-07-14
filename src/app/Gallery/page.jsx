"use client";

import styles from "./Gallery.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Gallery() {
  const imageRef = useRef([]);
  const containerRef = useRef();

  const images = [
    { image: "/compressed/bruschetta.webp", width: 800, height: 533 },
    { image: "/compressed/pourOverTwo.webp", width: 800, height: 533 },
    { image: "/compressed/salad.webp", width: 800, height: 1200 },
    { image: "/compressed/bomboloni.webp", width: 800, height: 1199 },
    { image: "/compressed/fritatta.webp", width: 780, height: 438 },
    { image: "/compressed/scacce.webp", width: 800, height: 756 },
    { image: "/compressed/exterior.webp", width: 800, height: 1200 },
    { image: "/compressed/chemex.webp", width: 800, height: 1067 },
    { image: "/compressed/pizzette.webp", width: 650, height: 488 },
    { image: "/compressed/v60.webp", width: 800, height: 800 },
    { image: "/compressed/salad2.webp", width: 800, height: 800 },
    { image: "/compressed/pourOver.webp", width: 800, height: 533 },
    { image: "/compressed/pizzette2.webp", width: 640, height: 427 },
    { image: "/compressed/caprese.webp", width: 800, height: 1200 },
    { image: "/compressed/interiorGallery.webp", width: 800, height: 1200 },
    { image: "/compressed/fritatta2.webp", width: 800, height: 800 },
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
        threshold: 0.5,
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
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            height={image.height}
            width={image.width}
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
            alt={`Cafe image ${index + 1}`}
            className={`${styles.image}`}
            ref={(el) => (imageRef.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
}
