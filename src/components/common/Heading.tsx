import styled from "styled-components";

type Props = {
  title: string;
};

export const Heading = ({ title }: Props) => {
  return <StyleH1>{title}</StyleH1>;
};

const StyleH1 = styled.h1`
  color: #383330;
  font-size: 40px;
  font-weight: bold;
`;
