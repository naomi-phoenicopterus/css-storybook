import styled, { css } from "styled-components";

type Props = {
  title: string;
};

export const Heading = ({ title }: Props) => {
  return (
    <StyleH1>
      {title}
    </StyleH1>
  );
};

const StyleH1 = styled.h1`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.black.main};
    font-size: 40px;
    font-weight: bold;
    gap: 16px;

    span {
      color: ${theme.colors.black.sub};
      font-size: 14px;
    }
  `}
`;
