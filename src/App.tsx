import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  MainText,
  Header,
  HomePageLayout,
  LRPads,
  Main,
  Footer,
  ThreeBoxes,
  TextInBox,
  LogoText,
  BoxPadding,
  LinkedInButton,
  SkillsText,
} from "./shared/styles";
import { capital } from "./shared/utils";
import {
  careerUpdate,
  careerUpdateHeading,
  mainStr,
  skills,
  education,
  linkedin,
  myResumeText,
  myNumber,
  myEmail,
} from "./shared/constants";

//TODO clean up
//TODO code splitting
//TODO fix styled component prop bug

function App() {
  return (
    <div className="App">
      <HomePageLayout>
        <Header>
          <LRPads>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <LogoText>{capital(`hammad`)}</LogoText>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "5%",
                  flexDirection: "row",
                }}
              >
                <LogoText>{myEmail}</LogoText>
                <LogoText>{myNumber}</LogoText>
                <LogoText>{capital(myResumeText)}</LogoText>
              </div>
            </div>
          </LRPads>
        </Header>
        <Main>
          <LRPads>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "var(--p05) 0",
                rowGap: "5%",
              }}
            >
              <MainText>{capital(mainStr)}</MainText>

              <SkillsText>{skills}</SkillsText>

              <LinkedInButton>{linkedin}</LinkedInButton>
            </div>
          </LRPads>
        </Main>
        <Footer>
          <ThreeBoxes>
            <div
              style={{
                borderRight: "1px solid white",
              }}
            >
              <BoxPadding>
                <TextInBox>{capital(education)}</TextInBox>
              </BoxPadding>
            </div>
            <div
              style={{
                borderRight: "1px solid white",
              }}
            >
              <BoxPadding>
                <TextInBox>{capital(education)}</TextInBox>
              </BoxPadding>
            </div>
            <div
              style={{
                background: "var(--green)",
              }}
            >
              <BoxPadding>
                <div
                  style={{ background: "var(--white)", color: "var(--blue)" }}
                >
                  {capital(careerUpdateHeading)}
                </div>
                <TextInBox accent>{capital(careerUpdate)}</TextInBox>
              </BoxPadding>
            </div>
          </ThreeBoxes>
        </Footer>
      </HomePageLayout>
    </div>
  );
}

export default App;
