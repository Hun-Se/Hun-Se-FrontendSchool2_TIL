import { useEffect } from 'react';
import { useState, useRef } from 'react';

function App() {
  const [modalShow, setModalSetShow] = useState(false);
  const modal = useRef()
  const button = useRef()
  useEffect(() => {
    if(modal.current == null || button.current == null) {
      return 
    }
    modal.current.style = {
      corlor: 'red'
    }
  }, [modalShow])
  return (
  <div className="App">
      <button ref={button} onClick={()=>setModalSetShow(!modalShow)}>
        Show me the 모달!
      </button>
      {/* {modalShow && (<div>modal</div>)} */}
      {modalShow ? (<div>modal</div>) : null }
    </div>
  );
}

export default App;