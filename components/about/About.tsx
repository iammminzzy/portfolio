import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col justify-center py-16 px-10 w-full h-[100vh] bg-amber-50">
      <div className="max-w-5xl">
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
        <p>Front End Developer</p>
      </div>
    </section>
  );
};

export default About;
