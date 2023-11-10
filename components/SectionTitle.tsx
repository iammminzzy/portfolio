import { MotionDiv, slideUpVariants } from "@/components/Motion";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <MotionDiv variants={slideUpVariants} transition={{ duration: 0.5 }}>
      <h2 className="font-titleFont text-xl sml:text-2xl md:text-3xl font-medium flex items-center">
        {title}
        <span className="w-full h-0.5 bg-pointYellow ml-6" />
      </h2>
    </MotionDiv>
  );
};
export default SectionTitle;
