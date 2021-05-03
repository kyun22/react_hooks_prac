import {useInput} from "./useInput";

function App() {
    const maxLen = value => value.length <= 10;
    const name = useInput("Mr. Shlee", maxLen);
    const email = useInput("@");

  return (
    <div className="App">
      Hello World!
        <input type="text" {...name}/>
    </div>
  );
}

export default App;
