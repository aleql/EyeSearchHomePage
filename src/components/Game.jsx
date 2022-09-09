import React from "react";
import styles, { layout } from "../style";
const Game = () => {
  return (
    <section
      id="play"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div className="webgl-content mx-auto mt-10 flex-col">
        <div id="unityContainer" className="h-[600px] w-[960px] bg-white"></div>
      </div>
    </section>
  );
};

export default Game;
