import React from "react";
import styles from "../style";
import { BsPlayBtn } from "react-icons/bs";
import { Link } from "react-router-dom";
const PlayButton = () => {
  return (
    <Link to="/play">
      <div
        className={`${styles.flexCenter} bg-blue-gradient group
      h-[160px] w-[160px] cursor-pointer rounded-full p-[2px] transition-all duration-100 hover:h-[165px] hover:w-[165px]`}
      >
        <div
          className={`${styles.flexCenter} group h-full w-full cursor-pointer flex-col rounded-full bg-primary`}
        >
          <div
            className={`${styles.flexStart} z-[8] flex-col items-center space-y-2`}
          >
            <p className="mr-1.5 font-poppins font-medium leading-[23px] transition-all duration-100 group-hover:mt-2 group-hover:scale-110 group-hover:text-xl group-hover:font-semibold">
              <span className="text-gradient text-lg">Play Now</span>
            </p>
            <BsPlayBtn
              className="fill-eprimary object-contain transition-all duration-100 group-hover:mb-2 group-hover:scale-110"
              size={"1.6em"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlayButton;
