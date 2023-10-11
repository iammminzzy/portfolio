"use client";

import { ReactNode } from "react";
import styled from "styled-components";

import { fadeInVariants, MotionDiv } from "@/components/common/Motion";

type Orientation = "left" | "right";
interface SideProps {
  children: ReactNode;
  orientation: Orientation;
  isHome?: boolean;
}

const StyledSide = styled.div<{ orientation: Orientation }>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${({ orientation }) => (orientation === "left" ? "40px" : "auto")};
  right: ${({ orientation }) => (orientation === "left" ? "auto" : "40px")};
  z-index: 10;

  @media (max-width: 1080px) {
    left: ${({ orientation }) => (orientation === "left" ? "20px" : "auto")};
    right: ${({ orientation }) => (orientation === "left" ? "auto" : "20px")};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side = ({ children, orientation }: SideProps) => {
  return (
    <StyledSide orientation={orientation}>
      <MotionDiv
        variants={fadeInVariants}
        transition={{ delay: 3.5, duration: 1 }}
      >
        {children}
      </MotionDiv>
    </StyledSide>
  );
};
export default Side;
