import React, {useState, useEffect} from 'react'



export default function UseEffect() {
        const[count, setCount] =useState(0); 
        
        useEffect(() =>{
            setTimeout(() => {
            setCount((count) => count+1);
            }, 1000);
    },[]);
  return (
        <div>
        I've rendered {count} times !  
        </div>
    )
}
