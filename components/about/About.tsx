import Image from "next/image";

import { highlightIcon, profileImg } from "@/images";

const About = () => {
  return (
    <section
      id="#about"
      className="flex flex-col justify-center px-[10%] w-full h-screen"
    >
      <div className="flex flex-col gap-5 items-center">
        <h1 className="font-titleFont font-semibold text-[125px] text-center">
          <span>Hi!</span>
          &nbsp;
          <span>I&#39;m</span>
          &nbsp;
          <span className="relative">
            <Image
              src={highlightIcon}
              alt="Icon to highlight my image in the About section"
              width={50}
              height={50}
              className="absolute left-[-1.75rem] top-[-1rem] inline"
            />
            <Image
              src={profileImg}
              alt="My image in About section"
              width={120}
              height={120}
              className="inline"
            />
          </span>
          &nbsp;
          <span>Minjee.</span>
        </h1>
        <p className="font-bodyFont text-2xl text-center">
          Professional{" "}
          <strong>
            <u>Front End Developer</u>
          </strong>{" "}
          and a lifelong learner who loves challenges.
          <br />
          I&#39;m passionate about creating perfect UIs and aim to make that one
          single difference in user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
