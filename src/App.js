import React, {useState} from "react";
import ReactDOM from 'react-dom/client';
function App() {  




const [count ,setCount] = useState(0);

function increase (){
     setCount(count + 1) ;
}  
function decrease() {
  setCount(count - 1) ;
}

  return (
    <div className="App">
      <h1>{count}</h1>
      <button type="button" onClick={increase}>+</button>
      <button type="button" onClick={decrease}>-</button>

    </div>
  );
}

export default App;
