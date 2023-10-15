import React from "react";
import { Heading } from "./common/Heading";
import { Box } from "./common/Box";
import { Stack } from "./common/Stack";
import { Link } from "./common/Link";
import styled from "styled-components";

const links: Link[] = [
  {
    name: "subgrid",
    url: "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout/Subgrid",
  },
  {
    name: "subgrid",
    url: "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout/Subgrid",
  },
  {
    name: "subgrid",
    url: "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout/Subgrid",
  },
];

export const Subgrid = () => {
  return (
    <>
      <Stack gap={4}>
        <Heading title="Subgrid" />
        <Link links={links} />

        <Box>
          <CardContainer>
            <Card>
              <CardTitle>カードタイトル</CardTitle>
              <CardImage src="https://placehold.co/600x400" />
              <CardText>カードテキストのサンプルです。</CardText>
              <CardLabel>ラベル</CardLabel>
            </Card>

            <Card>
              <CardTitle>カードタイトル</CardTitle>
              <CardImage src="https://placehold.co/600x400" />
              <CardText>カードテキストのサンプルです。</CardText>
              <CardLabel>ラベル</CardLabel>
            </Card>

            <Card>
              <CardTitle>カードタイトル</CardTitle>
              <CardImage src="https://placehold.co/600x400" />
              <CardText>
                カードテキストのサンプルです。カードテキストのサンプルです。カードテキストのサンプルです。カードテキストのサンプルです。
              </CardText>
              <CardLabel>ラベル</CardLabel>
            </Card>

            <Card>
              <CardTitle>カードタイトル</CardTitle>
              <CardImage src="https://placehold.co/600x400" />
              <CardText>カードテキストのサンプルです。</CardText>
              <CardLabel>
                <span>ラベル</span>
              </CardLabel>
            </Card>
          </CardContainer>
        </Box>
      </Stack>
    </>
  );
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;
const Card = styled.div`
  display: grid;
  grid-row: span 4;
  grid-template-rows: subgrid;
  padding: 16px;
  border: 1px solid #333;
  border-radius: 4px;
  row-gap: 16px;
`;
const CardTitle = styled.p``;
const CardImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
`;
const CardText = styled.p``;
const CardLabel = styled.div`
  display: inline-flex;
  padding: 4px 6px;
  background-color: #666;
  color: #fff;
`;
