import { useState } from 'react'
import './App.css'

function App() {

  function counterinitilization  (){
    return  5;
  }
  const  [counter, SetCounter] = useState(counterinitilization());

  function addValue(){
    SetCounter(counter + 1);

  }
  const removeValue = () =>{
    SetCounter(counter - 1);
    
  }
return(
<>
  
  <h1>Counter</h1>
  <h2>value: {counter}</h2>
  <button onClick={addValue}>Add Value </button>{"  "}
  <button onClick={removeValue} >Remove Value</button>
  <p>footer value: {counter}</p>
  
  </>
)
}

export default App
