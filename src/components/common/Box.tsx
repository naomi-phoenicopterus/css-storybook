import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const Box = ({ children }: Props) => {
  return <StyledDiv>{children}</StyledDiv>;
};

const StyledDiv = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
`