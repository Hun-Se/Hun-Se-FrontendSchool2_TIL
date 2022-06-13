import React, { useState } from "react";

function App () {
  return (
    <NavBar />
  )
}

function About () {
  return (
    <seciton>
      <h1>about</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum sequi quo nostrum et perspiciatis ratione quaerat dicta excepturi alias sint suscipit, ad odit nobis, autem obcaecati eveniet veritatis minima!</p>
    </seciton>
  )
}

function Product () {
  return (
    <seciton>
      <h1>Product</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum sequi quo nostrum et perspiciatis ratione quaerat dicta excepturi alias sint suscipit, ad odit nobis, autem obcaecati eveniet veritatis minima!</p>
    </seciton>
  )
}

function Contract () {
  return (
    <seciton>
    <h1>Contract</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum sequi quo nostrum et perspiciatis ratione quaerat dicta excepturi alias sint suscipit, ad odit nobis, autem obcaecati eveniet veritatis minima!</p>
  </seciton>
  )
}

function Notfound () {
  return <h1>Not found</h1>
}

const ContentsContainer = ({ listName }) => {
  if (listName === "about") {
    return <About/>
  } else if (listName === "product") {
    return <Product/>
  } else if (listName === "contract") {
    return <Contract/>
  } else if (listName === "notfound") {
    return <Notfound />
  }
}


function NavBar () {
  const [listName, setListName] = useState("about");
  const checkId = (e) => {
    setListName(e.target.id);
  }
  return (
    <>
      <nav>
        <ul>
          <li id = "about" style = {
              listName === "about" ? { color:"blue" } : {color:"black"}
            } onClick={checkId}>1
          </li> 
          <li id = "product" style = {
              listName === "product" ? { color:"blue" } : {color:"black"}
            } onClick={checkId}>2
          </li> 
          <li id = "contract" style = {
              listName === "contract" ? { color:"blue" } : {color:"black"}
            } onClick={checkId}>3
          </li>
          <li id = "notfound" style = {
              listName === "notfound" ? { color:"blue" } : {color:"black"}
            } onClick={checkId}>4
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  )
}

export default App;