import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  aspect-ratio: 35/54;
  background: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 75/52;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 10px;
  line-height: 26px;
  display: flex;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const DescriptionContainer = styled.div`
  height: 35%;
  display: block;
  overflow: hidden;
  margin-bottom: 15px;
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 15px;
    background: linear-gradient(
      180deg,
      rgba(19, 176, 245, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    position: absolute;
    bottom: 0;
  }
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY};
  margin: 0;

  overflow: hidden;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    cursor: pointer;
  }
`;

export const LinkIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkName = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;
