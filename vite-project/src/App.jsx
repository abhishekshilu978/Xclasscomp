import { useState } from "react";


function App() {
  const [valueOfCount, setValueOfCount] = useState(0);

  function incremment(){
    setValueOfCount(valueOfCount + 1);
  }
  function decrement(){
    setValueOfCount(valueOfCount - 1);
  }
  console.log(valueOfCount);
  return (
    <>
    <div className="card">
      <h1>Counter App</h1>
      <p>Count: {valueOfCount}</p>
      <button onClick={incremment}>Incremment</button>
      <button onClick={decrement}>Decrement</button>

    </div>
    
    </>
  )
}
export default App;