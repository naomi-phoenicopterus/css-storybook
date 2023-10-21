import { ReactNode } from "react";
import styled, { css } from "styled-components";

// type
type Props = {
  children: ReactNode;
};

export const Tips = ({ children }: Props) => {
  return (
    <StyledP>
      <span>📕</span>
      {children}
    </StyledP>
  );
};

const StyledP = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black.main};

    span {
      margin-right: 8px;
    }
  `}
`;
