import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Cart() {
    const [fetchData, setfetchData] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/carts").then(resource=>{
            console.log(resource);
            setfetchData(resource.data.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

  return (
    <>

    <div className="container">
        <h4 className="heading">Carts</h4>

        <div className="cart">
            <ol>
                {fetchData.map(cart=>(
                    <li key={cart.id}>
                        UserId:{cart.id}
                        <ul>
                            <li>UserId: {cart.userId}</li>
                            <li>Date:{cart.date}</li> 
                        </ul>
                       <ul>
                        {cart.products.map(items=>(
                           <li key={items.productId}>Products
                            <ul>
                                <li>Product Id: {items.productId}</li>
                                <li>Quantity: {items.quantity}</li>
                            </ul>
                           </li> 
                        ))}
                        </ul> 
                    </li>
                ))}
            </ol>
            
        </div>
    </div>
      
    </>
  )
}
