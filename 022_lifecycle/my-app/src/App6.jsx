import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';

function App() {
  
  const [num, setNum] = useState(0);

  const handleonClick = () => {
    setNum(num + 1)
  }

  useLayoutEffect(() => {
    console.log(1)
    return () => {
      console.log('return_1');
    }
  }, [])

  useLayoutEffect(() => {
    console.log(2)
    return () => {
      console.log('return_2');
    }
  },)

  useLayoutEffect(() => {
    console.log(3)
    return () => {
      console.log('return_3');
    }
  }, [num])

  return (
  <div className='App'>
    <button onClick={handleonClick}>{num}</button>
    </div>
  );
}

export default App;