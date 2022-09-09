import React from "react";
import styles from "../style";
import PlayButton from "./PlayButton";
import { eye } from "../assets";

const EyeSearch = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div className="flex grid w-full grid-cols-4 items-center justify-between">
        <div
          className="col-span-4 ml-4 flex-1 font-poppins text-3xl
         font-semibold leading-[75px] text-white ss:col-span-2 ss:ml-16 ss:text-5xl ss:leading-[75px]"
        >
          Eye-Search
          <span className="text-gradient text-5xl"> Therapy </span>
          <span className="flow-root text-left text-xl text-esecondary">
            UCL Institute of Neurology | UCL Multimedia
          </span>
        </div>
        <div className="col-span-2 hidden justify-center ss:flex">
          <PlayButton />
          <img src={eye} className="relative z-[5] -ml-12 w-3/4"></img>
          <div className="pink__gradient absolute top-0 z-[1] h-[30%] w-[20%] " />
          <div className="blue__gradient absolute top-0 right-20 z-[0] h-[45%] w-[40%]" />
        </div>
      </div>
      <div className={`ml-4 mt-6 ss:hidden ${styles.flexCenter}`}>
        <PlayButton />
        <img src={eye} className="relative z-[5] -ml-12 w-4/5"></img>
        <div className="pink__gradient absolute top-0 z-[1] h-[30%] w-[20%]" />
        <div className="blue__gradient absolute top-20 bottom-0 z-[0] h-[50%] w-[50%]" />
      </div>
    </section>
  );
};

export default EyeSearch;
