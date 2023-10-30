import Image from "next/image";

import { MotionDiv, slideUpVariants } from "@/components/common";
import { highlightIcon, profileImg } from "@/images";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center w-full max-w-contentContainer min-h-screen gap-8 mx-auto py-20 md:py-28"
    >
      <div className="flex w-full mdl:flex-row flex-col items-center justify-center gap-4 font-titleFont font-semibold text-bigHeading text-center leading-none">
        <MotionDiv
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 500,
            delay: 1,
          }}
        >
          <h1>Hi!</h1>
        </MotionDiv>
        <MotionDiv variants={slideUpVariants} transition={{ delay: 1.5 }}>
          <h1>I&#39;m</h1>
        </MotionDiv>
        <MotionDiv
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 2.5 }}
        >
          <Image
            src={highlightIcon}
            alt="Icon to highlight my image in the About section"
            width={40}
            height={40}
            className="absolute -left-5 -top-4 mdl:-left-7 mdl:-top-6 mdl:w-[50px] mdl:h-[50px]"
          />
          <Image
            src={profileImg}
            alt="My image in About section"
            width={150}
            height={150}
          />
        </MotionDiv>
        <MotionDiv variants={slideUpVariants} transition={{ delay: 2 }}>
          <h1>Minjee.</h1>
        </MotionDiv>
      </div>
      <MotionDiv
        variants={slideUpVariants}
        transition={{ delay: 3, duration: 1 }}
      >
        <p className="font-bodyFont text-base mdl:text-lg lgl:text-xl text-center">
          Professional{" "}
          <strong className="text-pointYellow">
            <u>Front End Developer</u>
          </strong>{" "}
          and a lifelong learner who loves challenges.
          <br />
          I&#39;m passionate about creating perfect UIs and aim to make that one
          single difference in user experiences.
        </p>
      </MotionDiv>
    </section>
  );
};

export default About;
