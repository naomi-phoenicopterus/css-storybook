import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  gap: number;
  children: ReactNode;
};

export const Stack = ({ gap, children }: Props) => {
  const calculatedGap = gap * 8;

  return <StyledDiv calculatedGap={calculatedGap}>{children}</StyledDiv>;
};

const StyledDiv = styled.div<{calculatedGap: number}>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.calculatedGap}px;
`;
