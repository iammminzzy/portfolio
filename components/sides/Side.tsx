"use client";

import { ReactNode } from "react";
import styled from "styled-components";

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
  return <StyledSide orientation={orientation}>{children}</StyledSide>;
};
export default Side;
