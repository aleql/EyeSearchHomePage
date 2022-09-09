import React from "react";
import styles from "../style";
import { EyeSearch, About, Research, Contact } from "../components";
function Home() {
  return (
    <React.Fragment>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <EyeSearch />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Research />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Contact />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
