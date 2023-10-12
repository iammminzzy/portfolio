import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/common";
import { Icon } from "@/components/common/Icons";
import { ProjectImg1 } from "@/public/images";

const temp = [1, 2, 3];

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-start px-[10%] mx-auto w-full max-w-contentContainer min-h-screen lgl:px-20 py-24"
    >
      <SectionTitle title="Projects" />
      <div className="w-full flex flex-col gap-20 mt-8">
        {temp.map((item, i) => {
          return (
            <div
              key={i}
              className="w-full flex flex-col items-center justify-center gap-28 mt-10"
            >
              <div
                className={`flex flex-col ${
                  item % 2 === 0 ? `xl:flex-row-reverse` : `xl:flex-row`
                } gap-6`}
              >
                <div className="w-full xl:w-1/2 h-auto relative group">
                  <Image
                    src={ProjectImg1}
                    alt="1st project"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div
                  className={`w-full xl:w-1/2 flex flex-col xl:gap-0 gap-2 lgl:justify-center z-10 ${
                    item % 2 === 0
                      ? "items-start text-left"
                      : "xl:-ml-16 items-end text-right"
                  }`}
                >
                  <p className="font-titleFont text-pointYellow text-sm tracking-wide">
                    Project 1
                  </p>
                  <h3 className="xl:mb-5 mb-2 text-2xl font-bold">
                    project name
                  </h3>
                  <p
                    className={`bg-pointYellow bg-opacity-20 shadow-md text-sm md:text-base p-5 md:p-6 rounded-md ${
                      item % 2 === 0 ? "xl:-mr-16 " : ""
                    }`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. orem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul className="flex gap-2 md:gap-5 justify-between xl:my-5 my-2 text-xs md:text-sm font-titleFont tracking-wide">
                    <li>React</li>
                    <li>React</li>
                    <li>React</li>
                    <li>React</li>
                    <li>React</li>
                  </ul>
                  <div className="flex gap-5">
                    <Link
                      href="/"
                      target="_blank"
                      className="hover:text-pointYellow text-2xl duration-300"
                    >
                      <Icon name="Github" />
                    </Link>
                    <Link
                      href="/"
                      target="_blank"
                      className="hover:text-pointYellow text-2xl duration-300"
                    >
                      <Icon name="Youtube" />
                    </Link>
                    <Link
                      href="/"
                      target="_blank"
                      className="hover:text-pointYellow text-2xl duration-300"
                    >
                      <Icon name="External" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col gap-6">
            <div className="w-full xl:w-1/2 h-auto relative group">
              <Image
                src={ProjectImg1}
                alt="1st project"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full xl:w-1/2 flex flex-col xl:gap-0 gap-2 lgl:justify-center items-end text-right z-10">
              <p className="font-titleFont text-pointYellow text-sm tracking-wide">
                Project 1
                <h3 className="mb-3 text-2xl font-bold text-dark font-bodyFont">
                  project name
                </h3>
              </p>
              <p className="bg-pointYellow bg-opacity-20 shadow-md text-sm md:text-base p-5 md:p-6 rounded-md xl:-mr-16">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. orem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="flex gap-2 md:gap-5 justify-between my-3 text-xs md:text-sm font-titleFont tracking-wide">
                <li>React</li>
                <li>React</li>
                <li>React</li>
                <li>React</li>
                <li>React</li>
              </ul>
              <div className="flex gap-5">
                <Link
                  href="/"
                  target="_blank"
                  className="hover:text-pointYellow text-2xl duration-300"
                >
                  <Icon name="Github" />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:text-pointYellow text-2xl duration-300"
                >
                  <Icon name="Youtube" />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:text-pointYellow text-2xl duration-300"
                >
                  <Icon name="External" />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Projects;
