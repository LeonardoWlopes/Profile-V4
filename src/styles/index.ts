import Image from "next/image";
import styled, { keyframes, css } from "styled-components";
import { mediaQuery } from "./functions";

export const Container = styled.div`
  width: 100%;
  //background-color: red;
`;

export const IntroductionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: 200px;

  ${mediaQuery("TABLET")(css`
    flex-direction: column;
    gap: 32px;
    margin-bottom: 100px;
  `)}
`;

export const IntroductionTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.6;
  margin-right: 16px;
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

  ${mediaQuery("LAPTOPS")(css`
    font-size: 42px;
  `)}

  ${mediaQuery("MOBILE")(css`
    font-size: 32px;
  `)}
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

  ${mediaQuery("LAPTOPS")(css`
    font-size: 42px;
  `)}

  ${mediaQuery("MOBILE")(css`
    font-size: 32px;
  `)}
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

  ${mediaQuery("MOBILE")(css`
    max-width: 300px;
  `)}
`;

export const Me = styled(Image)`
  width: 100%;
  max-width: 350px;
  border-radius: 50%;
  animation: ${rotate} 5s linear infinite;
  animation-direction: reverse;
`;

export const TechContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 210px;
`;

export const SectionTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 55px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  margin-bottom: 50px;
  text-transform: capitalize;
`;

export const SectionSubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY};
  margin-bottom: 140px;
`;

export const TechIconsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 68px;
`;

export const TechIcons = styled.div`
  width: 120px;
  aspect-ratio: 1/1;
  position: relative;
  transition: all 0.2s;

  :hover {
    width: 125px;
  }

  ${mediaQuery("TABLET")(css`
    width: 100px;

    :hover {
      width: 105px;
    }
  `)}
`;

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReposContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
`;
