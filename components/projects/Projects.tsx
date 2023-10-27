import Image from "next/image";
import Link from "next/link";

import { Icon, SectionTitle } from "@/components/common";
import { projects } from "@/libs/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-start px-[10%] mx-auto w-full max-w-contentContainer min-h-screen lgl:px-20 py-24"
    >
      <SectionTitle title="Projects" />
      <div className="w-full flex flex-col gap-20 mt-8">
        {projects.map(({ id, image, name, description, skills, links }, i) => {
          const even = i % 2 === 0;
          return (
            <div
              key={id}
              className="w-full flex flex-col items-center justify-center gap-28 mt-10"
            >
              <div
                className={`flex flex-col ${
                  even ? "xl:flex-row-reverse" : "xl:flex-row"
                } gap-6`}
              >
                <div className="w-full xl:w-1/2 h-auto relative group">
                  <Image
                    src={image}
                    width={500}
                    height={300}
                    alt={`main image of project ${id}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div
                  className={`w-full xl:w-1/2 flex flex-col xl:gap-0 gap-2 lgl:justify-center z-10 ${
                    even
                      ? "items-start text-left"
                      : "xl:-ml-16 items-end text-right"
                  }`}
                >
                  <p className="font-titleFont text-pointYellow font-medium text-sm tracking-wide">
                    Project {i + 1}
                  </p>
                  <h3 className="xl:mb-5 mb-2 text-2xl font-bold">{name}</h3>
                  <p
                    className={`bg-pointYellow bg-opacity-20 shadow-md text-sm md:text-base p-5 md:p-6 rounded-md ${
                      even ? "xl:-mr-16 " : ""
                    }`}
                  >
                    {description}
                  </p>
                  <ul className="flex gap-2 md:gap-5 justify-between xl:my-5 my-2 text-xs md:text-sm font-titleFont tracking-wide">
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <div className="flex gap-5">
                    {Object.keys(links).map((key) => {
                      return (
                        <Link
                          key={key}
                          href={links[key]}
                          target="_blank"
                          className="hover:text-pointYellow text-2xl duration-300"
                        >
                          <Icon name={key} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
