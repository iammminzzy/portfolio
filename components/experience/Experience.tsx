"use client";

import { useState } from "react";

import { SectionTitle } from "@/components/common";
import { experiences } from "@/libs/data";

import { ExperienceContent, ExperienceList } from "./components";

const Experience = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section
      id="experience"
      className="flex flex-col justify-start mx-auto w-full py-20 md:py-28 mdl:max-w-containerXs mdl:min-h-screen"
    >
      <SectionTitle title="Work Experience" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-8 md:gap-16">
        <ul className="flex overflow-x-scroll md:overflow-x-visible md:flex-col md:w-fit">
          {experiences.map(({ id, company }) => (
            <ExperienceList
              key={id}
              name={company}
              isActive={activeId === id}
              handleList={() => setActiveId(id)}
            />
          ))}
        </ul>
        {experiences.map(
          ({ id, title, company, startDate, endDate, description }) => {
            if (activeId !== id) return;

            return (
              <ExperienceContent
                key={id}
                title={title}
                company={company}
                startDate={startDate}
                endDate={endDate}
                description={description}
              />
            );
          }
        )}
      </div>
    </section>
  );
};
export default Experience;
