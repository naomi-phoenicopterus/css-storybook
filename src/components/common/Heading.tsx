import styled from "styled-components";

type Props = {
  title: string;
};

export const Heading = ({ title }: Props) => {
  return <StyleH1>{title}</StyleH1>;
};

const StyleH1 = styled.h1`
  color: #383330;
  font-weight: bold;
  font-size: 32px;
`
