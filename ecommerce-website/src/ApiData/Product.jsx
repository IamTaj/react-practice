import React,{useState, useEffect} from 'react'
import axios from 'axios'
export default function Product() {
    const[fetchData, SetfetchData] = useState([])
    useEffect (()=>{
        axios.get("https://fakestoreapi.com/products").then(resource=>{
            console.log(resource);
            SetfetchData(resource.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
  return (
    <>
        <div className="container">
        <h4 className='heading'>Products</h4>

        <div className="products">
            <ol>
                {fetchData.map(product=>(
                    <li key={product.id} className="items">
                        <ul>
                        <li><img src={product.image} width={"100px"} /></li>
                            <li>Title: {product.title}</li> 
                            <li>Price: {product.price}</li>
                            <li>Description: {product.description}</li>
                            <li>Category: {product.category}</li>
                            <li>Rating: 
                                <ul>
                                <li>Rate: {product.rating.rate}</li>
                                <li>Product Review: {product.rating.count} customers</li>
                                </ul>
                            </li>
                        </ul>

                    </li>
                ))}
            </ol>
        </div>
        </div>
      
    </>
  )
}
