import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { H1, Header, HomePageLayout, Main } from "./shared/styles";

function App() {
  return (
    <div className="App">
      <HomePageLayout>
        <Header></Header>
        <Main>
          <H1>Hammad</H1>
        </Main>
      </HomePageLayout>
    </div>
  );
}

export default App;
