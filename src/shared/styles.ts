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

export const Footer = styled.footer``;

export const MainText = styled.h1`
  font-weight: var(--w300);
  font-size: 3rem;
  color: var(--white);
  margin: 0;
`;

type TextInBoxProps = {
  accent?: boolean;
};

export const TextInBox = styled.h2<TextInBoxProps>`
  font-weight: var(--w400);
  /* font-size: 1.5rem; */
  color: ${(props) => (props.accent ? "var(--dark-blue)" : "var(--white)")};
  margin: 0;
`;

export const SkillsText = styled.h4`
  font-weight: var(--w400);
  /* font-size: 1.5rem; */
  color: var(--white);
  margin: 0;
`;

export const LogoText = styled.h3`
  font-weight: var(--w300);
  /* font-size: 1.5rem; */
  color: var(--white);
  margin: 0;
`;

export const LRPads = styled.section`
  padding: 0 var(--p05);
`;

export const BoxPadding = styled.article`
  padding: var(--p05) var(--p10);
`;

export const LinkedInButton = styled.a`
  background-color: var(--green);
  color: var(--blue);
  cursor: pointer;
  font-size: 1rem;
  padding: 1%;
`;
