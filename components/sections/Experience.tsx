"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import {
  fadeInVariants,
  MotionDiv,
  SectionTitle,
  slideUpVariants,
} from "@/components";
import { experiences } from "@/libs/data";

const Experience = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section
      id="experience"
      className="flex flex-col justify-start mx-auto w-full py-[90px] md:py-28 mdl:max-w-containerXs mdl:min-h-screen"
    >
      <SectionTitle title="Work Experience" />
      <MotionDiv
        variants={slideUpVariants}
        transition={{ duration: 0.5 }}
        className="w-full mt-10 flex flex-col mdl:flex-row gap-8 mdl:gap-16"
      >
        <ul className="flex overflow-x-scroll mdl:overflow-x-visible mdl:flex-col mdl:w-fit">
          {experiences.map(({ id, company }) => {
            const isActive = activeId === id;
            return (
              <li
                key={id}
                onClick={() => setActiveId(id)}
                className={`${
                  isActive
                    ? "border-b-pointYellow md:border-l-pointYellow bg-pointYellow/10 font-semibold"
                    : "border-dark/10"
                } px-8 py-3 border-b-2 md:border-b-0 border-l-0 md:border-l-2 hover:border-l-pointYellow  hover:bg-pointYellow/10 text-sm cursor-pointer duration-300 whitespace-nowrap`}
              >
                {company}
              </li>
            );
          })}
        </ul>
        {experiences.map(
          ({ id, title, company, startDate, endDate, description }) => {
            if (activeId !== id) return;

            return (
              <MotionDiv
                key={id}
                variants={fadeInVariants}
                transition={{ delay: 0.1 }}
                className="w-full"
              >
                <h3 className="flex items-center gap-1 font-medium text-base sml:text-xl">
                  {title}{" "}
                  <span className="text-sm sml:text-lg text-dark text-opacity-50">
                    @{company}
                  </span>
                </h3>
                <p className="text-xs">
                  {startDate} - {endDate}
                </p>
                <ul className="flex flex-col gap-3 mt-6">
                  {description.map((desc, i) => (
                    <li
                      key={`${i}+${desc}`}
                      className="text-sm sml:text-base text-dark flex gap-2"
                    >
                      <span className="text-pointYellow mt-1">
                        <FiArrowRight />
                      </span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            );
          },
        )}
      </MotionDiv>
    </section>
  );
};
export default Experience;
