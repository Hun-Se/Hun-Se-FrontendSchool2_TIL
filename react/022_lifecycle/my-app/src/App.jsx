import React, { useEffect, useLayoutEffect, useState } from "react";

import ReactDOM from 'react-dom/client';

function App() {

  const [num, setNum] = useState(0)

  const handleonClick = () => {
    setNum(num + 1)
  }

  useLayoutEffect(()=>{
    console.log('useEffect 1')
    return () => {
      console.log('useEffect_return_1')
    }
  }, [])

  useLayoutEffect(()=>{
    console.log('useEffect 2')
    return () => {
      console.log('useEffect_return_2')
    }
  })

  useLayoutEffect(()=>{
    console.log('useEffect 3')
    return () => {
      console.log('useEffect_return_3')
    }
  }, [num])

  return (
    <div className="App">
      <button onClick={handleonClick}>{num}</button>
    </div>
  );
}

export default App;