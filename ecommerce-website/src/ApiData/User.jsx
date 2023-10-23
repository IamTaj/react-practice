import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function User() {
    const [fetchData,setFetchData] = useState([])
    const [id,setId] = useState()
    const [IdFromButton, setIdFromButton] = useState()

    const handleClick = () =>{
        setIdFromButton(id);
    } 

    useEffect(()=>{
        
        axios.get(`https://fakestoreapi.com/users/${id}`).then(resource=>{
            console.log(resource.data);
            setFetchData(resource.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[IdFromButton])

  return (
    <>
    <div className="container">
    <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
    <button type="button" onClick={handleClick}>Fetch User Detail</button>
    <div className="container">
        <p>User Id: {fetchData.id}</p>
        <p>Email: {fetchData.email}</p>
        <p>UserName: {fetchData.username}</p>
        <p>Password: {fetchData.password}</p>
        <p></p>
    </div>
    </div>
    </>
  )
}
