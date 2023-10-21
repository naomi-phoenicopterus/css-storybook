import { useState } from "react";
import { Stack } from "./common/Stack";
import { Heading } from "./common/Heading";
import { Box } from "./common/Box";
import styled from "styled-components";
import { Link } from "./common/Link";

const links: Link[] = [
  {
    name: "object-fit",
    url: "https://developer.mozilla.org/ja/docs/Web/CSS/object-fit",
  },
];

export const ObjectFit = () => {
  const [objectFit, setObjectFit] = useState("cover");
  const [isCurrent, setIsCurrent] = useState(false);

  const handleClick = (text: string) => {
    setObjectFit(text);
    console.log("クリック");
  };

  return (
    <Stack gap={4}>
      <Heading title="object-fit" />
      <Link links={links} />
      <Box>
        <Stack gap={4} flexDirection="row" alignItems="center">
          <Stack gap={2} flexDirection="row">
            <StyledDiv objectFit={objectFit}>
              <img src="https://source.unsplash.com/random" alt="" />
            </StyledDiv>

            <Stack gap={2} alignItems="center">
              <StyledCircle objectFit={objectFit}>
                <img src="https://source.unsplash.com/random" alt="" />
              </StyledCircle>
              <StyledRect objectFit={objectFit}>
                <img src="https://source.unsplash.com/random" alt="" />
              </StyledRect>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <StyledP>
              いまのトリミング：<span>{objectFit}</span>
            </StyledP>

            <StyledUl gap={2}>
              <StyledLi>
                <StyledButton onClick={() => handleClick("cover")}>
                  <span>cover</span>
                  アスペクト比を維持しながらボックス全体を埋める
                </StyledButton>
              </StyledLi>
              <StyledLi>
                <StyledButton onClick={() => handleClick("contain")}>
                  <span>contain</span>アスペクト比を維持してボックス内に収める
                </StyledButton>
              </StyledLi>
              <StyledLi>
                <StyledButton onClick={() => handleClick("none")}>
                  <span>none</span>画像の拡大縮小をしない
                </StyledButton>
              </StyledLi>
              <StyledLi>
                <StyledButton onClick={() => handleClick("fill")}>
                  <span>fill</span>
                  アスペクト比をボックスに合わせてボックス全体を埋める
                </StyledButton>
              </StyledLi>
            </StyledUl>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

// 画像ボックス
const StyledDiv = styled.div<{ objectFit: string }>`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #d7d9d5;

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: ${(props) => props.objectFit};
  }
`;

const StyledCircle = styled(StyledDiv)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const StyledRect = styled(StyledDiv)`
  width: 80px;
  height: 200px;
  border-radius: 100vh 100vh 0 0;
`;

// テキスト
const StyledP = styled.p`
  color: #a59d98;
  font-weight: bold;
`;

// リスト
const StyledUl = styled(Stack)``;

const StyledLi = styled.li`
  list-style: none;
`;

// ボタン
const StyledButton = styled.button`
  position: relative;
  padding: 8px 16px 8px 90px;
  transition: 0.2s;
  border: 1px solid #383330;
  border-radius: 100vh;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  span {
    display: inline-flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 100%;
    border-radius: 100vh 0 0 100vh;
    background-color: #d7d9d5;
    font-size: 14px;
    letter-spacing: 0.05em;
  }
`;
