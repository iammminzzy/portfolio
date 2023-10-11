interface SectionTitleProps {
  titleNo?: string;
  title: string;
}

const SectionTitle = ({ titleNo, title }: SectionTitleProps) => {
  return (
    <h2 className="font-titleFont text-2xl font-medium flex items-center">
      <span className="text-base md:text-lg">{titleNo}</span>
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:2-72 h-0.5 bg-pointYellow ml-5" />
    </h2>
  );
};
export default SectionTitle;
