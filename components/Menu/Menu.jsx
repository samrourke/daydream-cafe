
"use client";

import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={`${styles.menuSection} container`}>
      {/* <h1 className="sectionTitle">Menu</h1> */}
      <h1 className={styles.menuTitle}>Coffee</h1>

      <div className={styles.menuGroup}>
        <h2>Espresso</h2>
        <div className={styles.item}>
          <h3>Milk | Blend</h3>
          <span className={styles.meta}>House | Seasonal | Decaf</span>
          <p>
            Flat White, Latte, Iced Latte, Piccolo, Cappuccino, Mocha, Iced
            Mocha
          </p>
        </div>

        <div className={styles.item}>
          <h3>Black | Single Origin</h3>
          <span className={styles.meta}>Changes Weekly, ask in store</span>
          <p>Espresso, Doppio, Long Black, Iced Long Black</p>
        </div>
      </div>

      <div className={styles.menuGroup}>
        <h2>Filter</h2>
        <div className={styles.item}>
          <h3>Blend</h3>
          <p>Cold Brew, Cold Brew Latte</p>
        </div>
        <div className={styles.item}>
          <h3>Single Origin</h3>
          <span className={styles.meta}>Seasonal Selection</span>
          <p>Batch Brew, Iced Batch Brew</p>
        </div>

        <div className={styles.item}>
          <h3>Hand Poured</h3>
          <span className={styles.meta}>Seasonal Selection</span>
          <p>V60 / Chemex</p>
        </div>
      </div>

      <div className={styles.menuGroup}>
        <h2>Other</h2>
        <div className={styles.item}>
          <h3>Matcha</h3>
          <p>Matcha Latte, Iced Matcha</p>
        </div>
        <div className={styles.item}>
          <h3>Chocolate</h3>
          <span className={styles.meta}>Milk | Dark</span>
          <p>Hot Chocolate, Iced Chocolate</p>
        </div>
        <div className={styles.item}>
          <h3>Chai</h3>
          <p>Chai Latte, Iced Chai</p>
        </div>
        <div className={styles.item}>
          <h3>Tea</h3>
          <p>Various</p>
        </div>
      </div>

      <div className={styles.menuGroup}>
        <h1 className={styles.menuTitle}>Food</h1>

        <div className={styles.item}>
          <h3>Italian Pastries</h3>
          <p>Pizzette, Bamboloni</p>
        </div>

        <div className={styles.item}>
          <h3>Frittata</h3>
          <p>Seasonal vegetable frittata</p>
        </div>

        <div className={styles.item}>
          <h3>Toast & Small Plates</h3>
          <p>Ciabatta with ricotta & honey, Tomato & basil bruschetta</p>
        </div>

        <div className={styles.item}>
          <h3>Focaccia Sandwiches</h3>
          <p>Caprese, Mortadella & Provolone</p>
          <p> Tomato, Mozarella & pesto</p>
        </div>

        <div className={styles.item}>
          <h3>Seasonal Salads</h3>
          <p>Fresh salads changed daily</p>
        </div>
      </div>
      <p className={styles.note}>
        All items made fresh daily, subject to availability.
      </p>
    </div>
  );
}
