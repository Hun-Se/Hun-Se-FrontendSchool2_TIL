import React, { useState, useRef } from "react";

const App = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값
  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef
  const inputCheck = (e) => {
    e.preventDefault();
    console.log(emailInput);
    console.log(pwInput);
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);

    if (emailInput.current.value === "") {
      alert("이메일을 입력해주세요");
      emailInput.current.focus();
      return; // if,else 문에 들어오게 되면 setState 실행없이 바로 return
    } else if (pwInput.current.value === "") {
      alert("비밀번호를 입력해주세요");
      pwInput.current.focus();
      return;
    }
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput}/>
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput}/>
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default App;