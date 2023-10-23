import React, {useState, useEffect} from 'react'

export default function UseEffectHook() {
    const [count, setCount] = useState(0);

    useEffect(()=> {
    document.title =`You enter the button ${count} times`
    }   )

  return (
    <div>
      <button onClick={() =>setCount(prevCount => prevCount+1)}>Counter</button>
    </div>
  )
}
