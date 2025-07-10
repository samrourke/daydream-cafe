import styles from "./Loading.module.css";
import { forwardRef } from "react";

const Loading = forwardRef(function Loading(_, ref) {
  return (
    <section className={styles.loading}>
      <div className={styles.logoDiv} ref={ref}>
        <img className={styles.logo} src="/inkblotCropped.png" />
      </div>
    </section>
  );
});

export default Loading;
