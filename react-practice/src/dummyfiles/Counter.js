import React, {useState} from 'react'

export default function Counter() {
    const initialCounter =0;
    const [count, setCount] = useState(0);
  return (
    <div>
      <center>
        Count : {count}
      </center>

      <button onClick={() =>setCount(initialCounter)}>Reset</button>
      <button onClick={() =>setCount(prevCount => prevCount+1)}>Increment</button>
      <button onClick={() =>setCount(prevCount => prevCount-1)}>Decrement</button>
    </div>
  )
}
