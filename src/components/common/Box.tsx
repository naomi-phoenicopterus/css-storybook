import { ReactNode } from "react";
import styled, { css } from "styled-components";

type Props = {
  children: ReactNode;
};

export const Box = ({ children }: Props) => {
  return <StyledDiv>{children}</StyledDiv>;
};

const StyledDiv = styled.div`
  ${({ theme }) => css`
    padding: 24px;
    border-radius: 8px;
    background-color: ${theme.colors.white};
  `}
`;
