import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });// 이렇게 만들어놓으면 props를 전달하지 않고 바로 값을 전달 할 수 있다.


const App = () => {
  return (
    <HelloLicat/>
  );
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatTwo/>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatThree/>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatThree = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default App;