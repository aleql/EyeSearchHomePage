import React from "react";
const Button = ({ styles, content }) => (
  <button
    type="button"
    className={`bg-button-gradient rounded-[10px] py-4 px-8  font-poppins text-sm font-semibold
      tracking-tight text-white outline-none transition-all delay-75
       duration-300 hover:scale-105 hover:bg-gradient-to-l hover:tracking-wide
       motion-reduce:transition-none motion-reduce:hover:transform-none 
      ${styles}`}
  >
    {content}
  </button>
);

export default Button;
