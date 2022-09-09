import React from "react";
import PropTypes from "prop-types";
import styles, { layout } from "../style";
import { useInView } from "react-intersection-observer";

function Section({ heading, paragraph, image, button, inverted }) {
  const { ref, inView } = useInView();
  return (
    <div className="w-full px-12">
      <section
        id={`about` + heading}
        className={` ${
          inverted ? layout.sectionReverse : layout.section
        } -mb-20 ml-2 justify-around`}
      >
        <div
          ref={ref}
          className={`opacity-0 ${layout.sectionInfo}  ${
            inView ? "motion-safe:animate-fadeIn" : ""
          } mt-20 pr-10`}
        >
          {heading && <h2 className={`${styles.heading2}`}>{heading}</h2>}
          {paragraph && (
            <p className={`${styles.paragraph} mt-5 max-w-[600px] indent-8 leading-relaxed text-justify`}>
              {paragraph && paragraph}
            </p>
          )}

          {button && button}
        </div>
        {image && (
          <div
            className={`opacity-0 ${
              inverted ? layout.sectionImgReverse : layout.sectionImg
            } flex-col  ${
              inView ? "motion-safe:animate-fadeIn" : ""
            }`}
          >
            {image}
          </div>
        )}
      </section>
    </div>
  );
}

Section.propTypes = {
  heading: PropTypes.string,
  button: PropTypes.element,
  paragraph: PropTypes.string,
  image: PropTypes.element,
  inverted: PropTypes.bool,
};

// Section.defaultProps = {
//   heading: "",
//   button: "",
//   paragraph: "",
//   image: "",
//   inverted: false,
// };

export default Section;
