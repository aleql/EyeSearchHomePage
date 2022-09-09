import React, { useCallback, useRef } from "react";
import { noImg } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Section from "./Section";

function About() {
  return (
    <div id="about" className="flex flex-col justify-center items-center">
      <Section
        heading={"What is Eye-Search?"}
        paragraph={`Eye-Search is a free online therapy for patients with visual search problems
          caused by brain injury. The two main syndromes that cause this are hemianopia
          (loss of vision to one side) and spatial neglect (loss of attention to items on one side).
          It is a clinically proven, behavioural therapy designed to improve patients'
          speed and accuracy when finding objects. We also hope that it may improve patients'
          ability to navigate safely, with fewer collisions with objects or other people e.g.
          when walking outside. The therapy can be accessed by any web browser and thus you can
          do the therapy from anywhere and at anytime at your own pace. As well as the therapy,
          there are also four simple tests which allow you to check your progress during
          the course of the therapy.`}
        image={
          <img src={noImg} className={`max-h-80 scale-75`}></img>
        }
        button={<Button styles="mt-20 ml-40" content={"Get Started"} />}
        inverted={false}
      />
      <Section
        heading={"Who is Eye-Search for?"}
        paragraph={`Eye-Search is for patients with visual problems caused by brain injury,
          especially those who are having trouble finding things around them.
          Hemianopia and spatial neglect are the two main causes of this.
          The common underlying causes are stroke, head injury and brain tumours`}
        image={
          <img src={noImg} className={`mt-24 max-h-64 scale-75`}></img>
        }
        inverted={true}
      />
      <Section
        heading={"Why use Eye-Search?"}
        paragraph={`Eye-Search will not improve your visual field, but it should improve
            your visual function by inducing changes in how you move your eyes to
            sample the world around you. This is called a compensatory strategy.
            A paper detailing the strategy behind Eye-Search has been published
            in the scientific journal Cortex.`}
        image={
          <img src={noImg} className={`mt-24 max-h-64 scale-75`}></img>
        }
        inverted={false}
      />
      <Section
        paragraph={`The main component is the Eye-Search therapy game. This game
          consists of 16 levels which are increasing difficult. Each level has
          100 trials. The task is simple; for each trial you watch a ball roll
          across the screen, it jumps unexpectedly and you have to find it. By
          doing this you will be exercising the parts of your brain that
          control eye-movements. There is good evidence that with lots of
          practice this exercise will carry-over and affect performance on
          tasks relevant to you, such as finding objects on a crowded desk, or
          navigating more safely in an ever changing environment, such as
          walking down the street.`}
        image={
          <img src={noImg} className={`mt-24 max-h-64 scale-75`}></img>
        }
        inverted={true}
      />
    </div>
  );
}

export default About;
