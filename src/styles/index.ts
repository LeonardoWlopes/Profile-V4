import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  //background-color: red;
`;

export const IntroductionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IntroductionTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.6;
`;

export const Introductions = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  display: flex;
  align-items: center;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ImageContainer = styled.div`
  flex: 0.4;
`;

export const MyName = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  display: flex;
  align-items: center;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};

  background: -webkit-linear-gradient(right, #13b0f5, #e70faa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const rotate = keyframes`
0% {
  transform: rotateZ(0deg);
}

100% {
  transform: rotateZ(360deg);
}
`;

export const ImageFrame = styled.div`
  width: 100%;
  max-width: 360px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, #13b0f5 0%, #e70faa 100%);
  animation: ${rotate} 5s linear infinite;
  margin-left: auto;
`;

export const Me = styled(Image)`
  width: 100%;
  max-width: 350px;
  border-radius: 50%;
  animation: ${rotate} 5s linear infinite;
  animation-direction: reverse;
`;
