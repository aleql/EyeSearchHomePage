const styles = {
  boxWidth: "xl:max-w-[2280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  heading1: "font-poppins font-semibold text-xl text-white w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-10 px-4",
  paddingY: "sm:pb-8 pb-4 sm:pt-8 pt-4",
  padding: "sm:px-10 px-4 sm:py-12 py-4",

  marginX: "sm:mx-10 mx-4",
  marginY: "sm:my-10 my-4",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY} space-x-reverse`,

  sectionImgReverse: `flex ${styles.flexCenter}  mr-0 relative`,
  sectionImg: `flex ${styles.flexCenter} ml-0 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col relative`,
};

export default styles;
