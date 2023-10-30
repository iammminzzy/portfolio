import Image from "next/image";
import Link from "next/link";

import { Icon, SectionTitle } from "@/components/common";
import { projects } from "@/libs/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-start mx-auto w-full max-w-contentContainer mdl:min-h-screen py-[90px] md:py-28"
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
                  even ? "mdl:flex-row-reverse" : "mdl:flex-row"
                } gap-6`}
              >
                <div className="w-full mdl:w-1/2 h-auto relative group">
                  <Image
                    src={image}
                    width={500}
                    height={300}
                    alt={`main image of project ${id}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div
                  className={`w-full mdl:w-1/2 flex flex-col xl:gap-0 md:gap-4 gap-3 mdl:justify-center z-10 ${
                    even
                      ? "items-start text-left"
                      : "mdl:-ml-16 items-end text-right"
                  }`}
                >
                  <p className="font-titleFont text-pointYellow font-medium text-xs md:text-sm tracking-wide -mb-3 xl:mb-0">
                    Project {i + 1}
                  </p>
                  <h3 className="xl:mb-5 text-lg md:text-2xl font-bold">
                    {name}
                  </h3>
                  <p
                    className={`bg-pointYellow bg-opacity-20 shadow-md text-xs md:text-base p-5 md:p-6 rounded-md ${
                      even ? "mdl:-mr-16 " : ""
                    }`}
                  >
                    {description}
                  </p>
                  <ul className="flex flex-wrap gap-2 md:gap-5 sml:my-0 xl:my-5 text-xs md:text-sm font-titleFont tracking-wide">
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <div className="flex gap-3 md:gap-5">
                    {Object.keys(links).map((key) => {
                      return (
                        <Link
                          key={key}
                          href={links[key]}
                          target="_blank"
                          className="hover:text-pointYellow text-lg md:text-2xl duration-300"
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
