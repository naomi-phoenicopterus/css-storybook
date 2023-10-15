import React from "react";
import styled from "styled-components";

type Props = {
  name?: string;
  url?: string;
  links: Link[]
};

export type Link = {
  name: string;
  url: string;
};

export const Link = ({ links }: Props) => {
  return (
    <StyledP>
      MDN：
      <StyledUl>
        {links.map((item) => (
          <li><StyledA href={item.url} target="_blank">{item.name}</StyledA></li>
        ))}
      </StyledUl>
    </StyledP>
  );
};

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`
const StyledP = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #a59d98;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #c6562d;
  background-color: transparent;
  padding: 4px 8px 6px;
  border-radius: 2px;
  transition: 0.2s;

  &:hover {
    background-color: #f1ecea;
  }
`;
