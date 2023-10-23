import axios from 'axios';
import React, { useState, useEffect} from 'react'
export default function Product1() {
    const[fetchData, setfetchData] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(res =>{
            console.log(res)
            setfetchData(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
  return (
    <>
    <div>
            {fetchData.map(product =>(
                <p key={product.id}>{product.title}</p>
            ))}
    </div>
      
    </>
  )
}
