import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles/functions";

export const Container = styled.header`
  transition: all 0.2s;
  min-height: 60px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;

  ${mediaQuery("TABLET")(css`
    justify-content: center;

    ::after {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      pointer-events: none;
      background: radial-gradient(
        circle,
        rgba(19, 176, 245, 0) 80%,
        white 100%
      );
      width: 100%;
      height: 100%;
    }
  `)}
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 60px;

  ${mediaQuery("TABLET")(css`
    gap: 26px;
  `)}
`;

export const Link = styled.li`
  transition: all 0.5s;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY};
  cursor: pointer;
  white-space: nowrap;

  ${mediaQuery("TABLET")(css`
    font-size: 14px;
  `)}

  :hover {
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    text-decoration: underline;
  }

  :active {
    opacity: 0.7;
  }
`;
