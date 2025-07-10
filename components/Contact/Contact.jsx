"use client";
import styles from "./Contact.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Map from "../Map/Map";

export default function Contact() {
  const contactRefs = useRef([]);

  const textRef = useRef([]);

  useEffect(() => {
    gsap.to(textRef.current, { opacity: 1, y: 0 });
  });

  return (
    <div className={`${styles.contactSection} container`}>
      <div>
        <div className={`${styles.contact} container`}>
          <div className={styles.contactContainer}>
            <div
              className={styles.addressContainer}
              ref={(el) => (contactRefs.current[0] = el)}
            >
              <div className={styles.textBox}>
                {" "}
                <h3
                  className={styles.bold}
                  ref={(el) => (textRef.current[0] = el)}
                >
                  Daydream{" "}
                </h3>
              </div>
              <div className={styles.textBox}>
                <p ref={(el) => (textRef.current[1] = el)}>
                  143 Made Up Street
                </p>
              </div>
              <div className={styles.textBox}>
                <p ref={(el) => (textRef.current[2] = el)}> Clapton</p>
              </div>
              <div className={styles.textBox}>
                {" "}
                <p ref={(el) => (textRef.current[3] = el)}>London E9 7EL</p>
              </div>
              <div className={styles.textBox}>
                {" "}
                <p ref={(el) => (textRef.current[4] = el)}>
                  Mon- Fri 8:30 - 5{" "}
                </p>
              </div>
              <div className={styles.textBox}>
                {" "}
                <p ref={(el) => (textRef.current[5] = el)}>Sat - Sun 9 - 5</p>
              </div>
            </div>
            <div
              className={styles.detailsContainer}
              ref={(el) => (contactRefs.current[1] = el)}
            >
              <div className={styles.textBox}>
                {" "}
                <h3
                  ref={(el) => (textRef.current[6] = el)}
                  className={styles.bold}
                >
                  Enquiries and Bookings
                </h3>
              </div>
              <div className={styles.textBox}>
                {" "}
                <div
                  ref={(el) => (textRef.current[7] = el)}
                  className={styles.iconRow}
                >
                  <img src="/email.png" alt="Email" />
                  <p>hello@daydream.co.uk</p>
                </div>
              </div>
              <div className={styles.textBox}>
                {" "}
                <h3
                  ref={(el) => (textRef.current[8] = el)}
                  className={styles.bold}
                >
                  Phone
                </h3>
              </div>
              <div className={styles.textBox}>
                <div
                  ref={(el) => (textRef.current[9] = el)}
                  className={styles.iconRow}
                >
                  <img src="/phone.png" alt="Email" />
                  <p>020 7134 00000</p>
                </div>
              </div>
            </div>{" "}
          </div>

          <div className={styles.mapContainer}>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

/*

<div className={`${styles.contact} container`}>
      <div className={styles.contactContainer}>
        <div
          className={styles.addressContainer}
          ref={(el) => (contactRefs.current[0] = el)}
        >
          <div className={styles.textBox}>
            {" "}
            <h3 className={styles.bold} ref={(el) => (textRef.current[0] = el)}>
              Daydream{" "}
            </h3>
          </div>
          <div className={styles.textBox}>
            <p ref={(el) => (textRef.current[1] = el)}>143 Made Up Street</p>
          </div>
          <div className={styles.textBox}>
            <p ref={(el) => (textRef.current[2] = el)}> Clapton</p>
          </div>
          <div className={styles.textBox}>
            {" "}
            <p ref={(el) => (textRef.current[3] = el)}>London E9 7EL</p>
          </div>
          <div className={styles.textBox}>
            {" "}
            <p ref={(el) => (textRef.current[4] = el)}>Mon- Fri 8:30 - 5 </p>
          </div>
          <div className={styles.textBox}>
            {" "}
            <p ref={(el) => (textRef.current[5] = el)}>Sat - Sun 9 - 5</p>
          </div>
        </div>
        <div
          className={styles.detailsContainer}
          ref={(el) => (contactRefs.current[1] = el)}
        >
          <div className={styles.textBox}>
            {" "}
            <h3 ref={(el) => (textRef.current[6] = el)} className={styles.bold}>
              Enquiries and Bookings
            </h3>
          </div>
          <div className={styles.textBox}>
            {" "}
            <div
              ref={(el) => (textRef.current[7] = el)}
              className={styles.iconRow}
            >
              <img src="/email.png" alt="Email" />
              <p>hello@daydream.co.uk</p>
            </div>
          </div>
          <div className={styles.textBox}>
            {" "}
            <h3 ref={(el) => (textRef.current[8] = el)} className={styles.bold}>
              Phone
            </h3>
          </div>
          <div className={styles.textBox}>
            <div
              ref={(el) => (textRef.current[9] = el)}
              className={styles.iconRow}
            >
              <img src="/phone.png" alt="Email" />
              <p>020 7134 00000</p>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className={styles.mapContainer}>
        <Map />
      </div>
    </div>

*/
