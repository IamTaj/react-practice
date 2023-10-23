import React,{useState, useEffect} from 'react'
import axios from 'axios'
export default function Cart() {
    const [fetchData, setfetchData] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/carts").then(res=>{
            console.log(res);
            setfetchData(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
  return (
    <>
      {fetchData.map(cart=>(
        <p key={cart.id}>
            UserId:{cart.userId}
            <br />
            Date:{cart.date}
        </p>
      ))}
    </>
  )
}
