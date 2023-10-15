import { ReactNode } from "react";
import { Reset } from "styled-reset";

import { GlobalStyle } from "../../style/globalStyle";
import styled from "styled-components";

// type
type Props = {
  children: ReactNode;
};

export const GlobalTheme = ({ children }: Props) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <StyledSection>{children}</StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  padding: 24px;
`