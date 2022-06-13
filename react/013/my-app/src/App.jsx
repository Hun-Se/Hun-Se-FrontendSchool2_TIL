import Header from "./Pages/Header";
import Nav from "./Components/Nav";
import Main from "./Pages/Main";
import React, { useState } from "react";
import reset from "styled-reset"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${reset}
  a{
    text-decoration : none;
    color : inherit;
  }

  button{
    border : none;
    cursor : pointer;
  }

 * {
  box-sizing: border-box;
  }
`

function App() {
  const [listName, setListName] = useState("document");
    const checkId = (e) => {
    setListName(e.target.id);
    console.log(e.target.id);
}
  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <Nav changeState={checkId} stateValue={listName}/>
      </Header>
      <Main/>
    </div>
  );
}

export default App;