import React, {useState, useEffect} from 'react'

export default function MouseAxis() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition =e =>{
        console.log("Mouse Log")
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() =>{
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
        console.log('Component Unmouting code');
        window.removeEventListener('mousemove', logMousePosition)
    }
},[])
  return (
    <div className='container'>
        Hooks X - {x} Y - {y}
        <button onClick={useEffect}>Toggle Display</button>
    </div>
  )
}
