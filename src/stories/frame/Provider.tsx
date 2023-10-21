import { ReactNode } from "react";
import { Reset } from "styled-reset";

import { GlobalStyle } from "../../style/globalStyle";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../style/theme";

// type
type Props = {
  children: ReactNode;
};

export const GlobalTheme = ({ children }: Props) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledSection>{children}</StyledSection>
      </ThemeProvider>
    </>
  );
};

const StyledSection = styled.section`
  padding: 32px 40px;
`;
