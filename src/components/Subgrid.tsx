import { Heading } from "./common/Heading";
import { Box } from "./common/Box";
import { Stack } from "./common/Stack";
import { Link } from "./common/Link";
import styled, { css } from "styled-components";
import { Tips } from "./common/Tips";

const links: Link[] = [
  {
    name: "subgrid",
    url: "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout/Subgrid",
  },
  {
    name: "grid",
    url: "https://developer.mozilla.org/ja/docs/Web/CSS/grid",
  },
  {
    name: "grid layout",
    url: "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout",
  },
];

export const Subgrid = () => {
  return (
    <Stack gap={4}>
      <Heading title="Subgrid" />
      <Link links={links} />
      <Tips>
        たとえば、カード内の要素の高さが異なる場合にもラベルを下部固定することができます。
      </Tips>
      <Box>
        <CardContainer>
          <Card>
            <CardTitle>TITLE</CardTitle>
            <CardImage src="https://placehold.co/600x400" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </CardText>
            <CardLabel>LABEL</CardLabel>
          </Card>

          <Card>
            <CardTitle>TITLE</CardTitle>
            <CardImage src="https://placehold.co/600x400" />
            <CardText>Lorem ipsum dolor sit amet</CardText>
            <CardLabel>LABEL</CardLabel>
          </Card>

          <Card>
            <CardTitle>TITLE</CardTitle>
            <CardImage src="https://placehold.co/600x400" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua., consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
            <CardLabel>LABEL</CardLabel>
          </Card>

          <Card>
            <CardTitle>TITLE</CardTitle>
            <CardImage src="https://placehold.co/600x400" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </CardText>
            <CardLabel>
              <span>LABEL</span>
            </CardLabel>
          </Card>
        </CardContainer>
      </Box>
    </Stack>
  );
};

const StyledText = styled.p`
  ${({ theme }) => css`
    /* margin-bottom: 24px; */
    /* background-color: ${theme.colors.orange.sub}; */
    color: ${theme.colors.black.main};
    /* padding: 16px; */
    font-size: 16px;
    /* border: 2px solid ${theme.colors.orange.sub}; */
  `}
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;
const Card = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-row: span 4;
    grid-template-rows: subgrid;
    padding: 16px;
    border: 1px solid ${theme.colors.black.main};
    border-radius: 4px;
    row-gap: 16px;
  `}
`;
const CardTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const CardImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
`;
const CardText = styled.p`
  line-height: 1.5;
`;
const CardLabel = styled.div`
  display: inline-flex;
`;
