import { ReactNode } from "react";

import { fadeInVariants, MotionDiv } from "@/components";

type Orientation = "left" | "right";
interface SideProps {
  children: ReactNode;
  orientation: Orientation;
  isHome?: boolean;
}

const Side = ({ children, orientation }: SideProps) => {
  return (
    <div
      className={`${
        orientation === "left"
          ? "right-auto left-5 lgl:left-10"
          : "left-auto right-5 lgl:right-10"
      } w-10 fixed bottom-0 z-10 hidden mdl:block`}
    >
      <MotionDiv
        variants={fadeInVariants}
        transition={{ delay: 3.5, duration: 1 }}
      >
        {children}
      </MotionDiv>
    </div>
  );
};
export default Side;
