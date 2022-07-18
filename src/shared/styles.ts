import styled from "styled-components";

export const HomePageLayout = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 13vh 57vh 30vh;
`;

export const ThreeBoxes = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto auto auto;
`;

export const Header = styled.header`
  background-color: var(--dark-blue);
  border-bottom: 1px solid var(--white);
`;

export const Main = styled.main`
  border-bottom: 1px solid var(--white);
`;

export const Footer = styled.footer`
`;

export const MainText = styled.h1`
  font-weight: var(--w300);
  font-size: 2rem;
  color: var(--white);
  margin: 0;
`;

export const LRPads = styled.section`
  padding: 0 var(--p05);
`;
