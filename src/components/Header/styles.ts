import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  margin-bottom:130px;
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 60px;
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

  :hover {
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    text-decoration: underline;
  }

  :active {
    opacity: 0.7;
  }
`;
