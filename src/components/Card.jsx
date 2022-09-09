import React from "react";
import styles, { layout } from "../style";

function Card({ author, title, journal, date, page, link }) {
  return (
    <div>
      <div
        className={` ${styles.flexCenter} group relative w-full overflow-hidden rounded-xl
        py-4 md:h-80`}
      >
        <div className="w-full object-cover p-4 ">
          <h2
            className={`${styles.heading1} text-center duration-200 group-hover:animate-fadeOut`}
          >
            <span className="text-[14px] font-light">
              {author && author + ", "}
            </span>
            <br />
            <span className="text-[24px] leading-loose">
              {title && title + ". "}
            </span>
            <br />
            <span className=" text-xs font-light italic">
              {journal && journal + ". "}
            </span>
            <br />
            <span className="text-[14px] font-light">
              {date && date + ":"} {page && page + "."}
            </span>
          </h2>
        </div>
        <div
          className="bg-button-gradient absolute top-0 -right-1 flex h-0 w-auto flex-col
         items-center justify-center rounded-xl opacity-0 duration-500 group-hover:h-full group-hover:opacity-95"
        >
          <h2 className="px-6 pb-6 text-center text-2xl font-bold text-white">
            {title && title}
          </h2>
          <a
            target="_blank"
            className="duration-0 cursor-pointer rounded-xl border border-primary/5 bg-secondary/25
             px-6 py-2 text-3xl font-bold text-primary/80 transition delay-150 hover:border-white/10
              hover:bg-secondary/50 hover:text-white/70 hover:duration-300"
            // href="https://pubmed.ncbi.nlm.nih.gov/22626007/"
            href={link && link}
          >
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
