import Image from "next/image";

import { MotionDiv, slideUpVariants } from "@/components/common/Motion";
import { highlightIcon, profileImg } from "@/images";

const About = () => {
  return (
    <section
      id="#about"
      className="flex flex-col justify-center px-[10%] w-full h-screen"
    >
      <div className="flex flex-col gap-5 items-center">
        <div className="inline-flex gap-4 font-titleFont font-semibold text-[125px] text-center">
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
              width={50}
              height={50}
              className="absolute left-[-1.75rem] top-0 inline"
            />
            <Image
              src={profileImg}
              alt="My image in About section"
              width={120}
              height={120}
              className="inline"
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
          <p className="font-bodyFont text-2xl text-center">
            Professional{" "}
            <strong>
              <u>Front End Developer</u>
            </strong>{" "}
            and a lifelong learner who loves challenges.
            <br />
            I&#39;m passionate about creating perfect UIs and aim to make that
            one single difference in user experiences.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
};

export default About;
