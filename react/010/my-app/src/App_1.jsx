function Resume(props) {
  let like = 0;

  function handleclickLike() {
      like += 1;
      console.log(like);
  }

  return(
      <div>
          <button onClick={handleclickLike}>like <span>{like}</span></button>
      </div>
  )
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
    </div>
  );
}

export default App;