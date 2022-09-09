import React from "react";
import Card from "./Card";
import { useInView } from "react-intersection-observer";
import styles from "../style";

function Research() {
  const { ref, inView } = useInView();
  return (
    <div
      id="research"
      className={`mx-auto mt-20 max-w-7xl flex-1 p-10 ${
        inView ? "motion-safe:animate-fadeIn" : ""
      }`}
      ref={ref}
    >
      <h2 className={`${styles.heading2} my-14`}>Our Research</h2>

      <ul className="grid grid-cols-1 flex-wrap gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-y-10 md:gap-x-4">
        <li className="rounded-xl border border-0 border-r-4 border-b-4 border-white/60 bg-slate-800/40 transition hover:bg-eprimary/75 hover:delay-200">
          <Card
            author={"Jacquin-Courtois S, Bays PM, Salemme R, Leff AP, Husain M"}
            title={
              "Rapid compensation of visual search strategy in patients with chronic visual field defects"
            }
            journal={"Cortex"}
            date={"2013;49(4)"}
            page={"994-1000"}
            link={"https://pubmed.ncbi.nlm.nih.gov/22626007/"}
          />
        </li>
        <li className="rounded-xl border border-0 border-r-4 border-b-4 border-white/60 bg-slate-800/40 transition hover:bg-eprimary/75 hover:delay-200">
          <Card
            author={
              "Ong YH, Jacquin-Courtois S, Gorgoraptis N, Bays PM, Husain M, Leff AP"
            }
            title={
              "Eye-Search: A web-based therapy that improves visual search in hemianopia"
            }
            journal={"Ann Clin Transl Neurol"}
            date={"2015;2(1)"}
            page={"74-78"}
            link={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4301677/"}
          />
        </li>
        <li className="h-max h-auto h-fit h-full rounded-xl border border-0 border-r-4 border-b-4 border-white/60 bg-slate-800/40 transition hover:bg-eprimary/75 hover:delay-200">
          <Card
            author={"Koiava N, Ong Y, Brown MM"}
            title={"A ‘web app’ for diagnosing hemianopia"}
            journal={"Journal of Neurology, Neurosurgery & Psychiatry"}
            date={"2012;83"}
            page={"1222-1224"}
            link={"https://jnnp.bmj.com/content/83/12/1222"}
          />
        </li>
        <li className="rounded-xl border border-0 border-r-4 border-b-4 border-white/60 bg-slate-800/40 transition hover:bg-eprimary/75 hover:delay-200">
          <Card
            author={
              "Parton A, Malhotra P, Nachev P, Ames D, Ball J, Chataway J, Husain M"
            }
            title={"Space re-exploration in hemispatial neglect. Neuroreport"}
            journal={"Neuroreport"}
            date={"2006;17(8)"}
            page={"833-836"}
            link={"https://pubmed.ncbi.nlm.nih.gov/16708024/"}
          />
        </li>
        <li className="rounded-xl border border-0 border-r-4 border-b-4 border-white/60 bg-slate-800/40 transition hover:bg-eprimary/75 hover:delay-200">
          <Card
            author={"Szalados R, Leff AP, Doogan CE"}
            title={
              "The clinical effectiveness of Eye-Search therapy for patients with hemianopia, neglect or hemianopia and neglect"
            }
            journal={"Neuropsychological Rehabilitation"}
            date={"2021;31(6)"}
            page={"971-82"}
            link={
              "https://www.tandfonline.com/doi/full/10.1080/09602011.2020.1751662"
            }
          />
        </li>
        <li className="rounded-xl border border-0 border-r-4 border-b-4 border-white/60 bg-slate-800/40 transition hover:bg-eprimary/75 hover:delay-200">
          {/* <Card author={""} title={""} /> */}
        </li>
      </ul>
    </div>
  );
}

export default Research;
