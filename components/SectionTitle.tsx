interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className="font-titleFont text-xl sml:text-2xl md:text-3xl font-medium flex items-center">
      {title}
      <span className="w-full h-0.5 bg-pointYellow ml-6" />
    </h2>
  );
};
export default SectionTitle;
