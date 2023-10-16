import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  gap: number;
  children: ReactNode;
  flexDirection?: "column" | "row";
  alignItems?: "unset" | "center" | "flex-start" | "flex-end";
  justifyContent?: "unset" | "center" | "flex-start" | "flex-end";
};

export const Stack = ({
  gap,
  children,
  flexDirection = "column",
  alignItems = "unset",
  justifyContent = "unset"
}: Props) => {
  const calculatedGap = gap * 8;

  return (
    <StyledDiv
      calculatedGap={calculatedGap}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </StyledDiv>
  );
};

type StyledDivProps = {
  calculatedGap: number;
  flexDirection: "column" | "row";
  alignItems?: "unset" | "center" | "flex-start" | "flex-end";
  justifyContent?: "unset" | "center" | "flex-start" | "flex-end";
};

const StyledDiv = styled.div<StyledDivProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.calculatedGap}px;
`;
