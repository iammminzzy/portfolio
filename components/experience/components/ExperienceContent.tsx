import { FiArrowRight } from "react-icons/fi";

import { fadeInVariants, MotionDiv } from "@/components/common";

interface ExperienceContentProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: Array<string>;
}

const ExperienceContent = ({
  title,
  company,
  startDate,
  endDate,
  description,
}: ExperienceContentProps) => {
  return (
    <MotionDiv
      variants={fadeInVariants}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex items-center gap-1 font-medium text-base sml:text-xl">
        {title}{" "}
        <span className="text-sm sml:text-lg text-dark text-opacity-50">
          @{company}
        </span>
      </h3>
      <p className="text-xs">
        {startDate} - {endDate}
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        {description.map((desc, i) => (
          <li
            key={`${i}+${desc}`}
            className="text-sm sml:text-base text-dark flex gap-2"
          >
            <span className="text-pointYellow mt-1">
              <FiArrowRight />
            </span>
            {desc}
          </li>
        ))}
      </ul>
    </MotionDiv>
  );
};
export default ExperienceContent;
