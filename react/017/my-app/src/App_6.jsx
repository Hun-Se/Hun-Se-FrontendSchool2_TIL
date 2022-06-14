import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
    const data = {
        title : '세훈블로그',
        contents: '',
        author:'',
        date: ''
    }

    const style = {
      margin: '10px'
    }
    return (
        <BrowserRouter>
          <Link to="/" style={style}>HomePage</Link>
          <Link to="/aboutpage" style={style}>AboutPage</Link>
          <Link to="/contactpage" style={style}>ContactPage</Link>
          <Link to="blogpage" style={style}>BlogPage</Link>
            {/* 라우트를 감싸줍니다. */}
            <Route 
              path="/" 
              exact 
              component={Homepage}
            />
            <Route 
              path="/aboutpage" 
              exact 
              component={AboutPage}
            />
            <Route 
              path="/contactpage" 
              component={ContactPage}
            />
            <Route 
              path="/blogpage"
              component={BlogPage}
            />
        </BrowserRouter>
    );
}

function Homepage(){
  return <h1>hello world0</h1>
}

function AboutPage(){
  return <h1>AboutPage</h1>
}

function ContactPage(){
  return <h1>ContactPage</h1>
}

function BlogPage(){
  return <h1>BlogPage</h1>
}

export default App;