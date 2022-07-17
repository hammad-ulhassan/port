import styled from "styled-components";

export const HomePageLayout = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 10vh auto;
`;

export const Header = styled.header`
  background-color: var(--dark-blue);
  border-bottom: 1px solid var(--white);
`;

export const Main = styled.main``;

export const H1 = styled.h1`
  font-weight: var(--w100);
  font-size: 5rem;
  color: var(--white);
`;
