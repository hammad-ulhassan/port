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
} from "./shared/styles";
import { capital } from "./shared/utils";
import { mainStr, subStr } from "./shared/constants";

function App() {
  return (
    <div className="App">
      <HomePageLayout>
        <Header>
          <LRPads>
            <MainText>{capital(`hammad`)}</MainText>
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
              }}
            >
              <MainText>{capital(mainStr)}</MainText>

              <h5>{subStr}</h5>
            </div>
          </LRPads>
        </Main>
        <Footer>
          <ThreeBoxes>
            <div style={{
              borderRight: "1px solid white"
            }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              unde inventore necessitatibus exercitationem 
            </div>
            <div style={{
              borderRight: "1px solid white"
            }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              unde inventore necessitatibus exercitationem temporibus, obcaecati
              dicta nesciunt minima dolorum doloremque ut
            </div>
            <div
            style={{
              background: "var(--green)"
            }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              unde inventore necessitatibus exercitationem temporibus,
            </div>
          </ThreeBoxes>
        </Footer>
      </HomePageLayout>
    </div>
  );
}

export default App;
