import React from "react";
import styled, { css } from "styled-components";

type Props = {
  name?: string;
  url?: string;
  links: Link[];
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
          <li>
            <StyledA href={item.url} target="_blank">
              {item.name}
            </StyledA>
          </li>
        ))}
      </StyledUl>
    </StyledP>
  );
};

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`;
const StyledP = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.black.sub};
    font-size: 14px;
    font-weight: bold;
  `}
`;

const StyledA = styled.a`
  ${({ theme }) => css`
    padding: 4px 8px 6px;
    transition: ${theme.transition};
    border-radius: 2px;
    background-color: transparent;
    color: ${theme.colors.orange.main};
    text-decoration: none;

    &:hover {
      background-color: ${theme.colors.orange.sub};
    }
  `}
`;
