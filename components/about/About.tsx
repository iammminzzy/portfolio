import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col justify-center py-16 px-10 w-full h-[100vh] bg-amber-50">
      <div className="flex flex-col gap-5 font-clashDisplay">
        <h1 className="font-clashDisplay font-semibold text-[125px]">
          <span>Hi!</span>
          &nbsp;
          <span>I&#39;m</span>
          &nbsp;
          <Image
            src="/profile.png"
            alt="my image in About section"
            width={100}
            height={100}
            className="inline"
          />
          &nbsp;
          <span>Minjee.</span>
        </h1>
        <p className="font-mono text-2xl">
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
