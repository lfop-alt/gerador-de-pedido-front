import loading from "../../assets/Spinner.svg";

import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src={loading} alt="Loading" />
    </div>
  );
}

export default Loading;
