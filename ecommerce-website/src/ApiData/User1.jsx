import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function User1() {
    const [ fetchdData, setFetchData ] =useState([])
    const [ id, setId ] = useState()
    const [idByButton, setIdByButton] = useState()

    const handleClick =()=>{
        setIdByButton(id);
    }
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/users").then(resource =>{
            console.log(resource?.data)
            setFetchData(resource?.data)
            
        })
    },[])
  return (
    <>
      {fetchdData?.map(user=>(
        <div>
            <p>User Id: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>UserName: {user.username}</p>
            <p>Name: {user.name.firstname} {user.name.lastname}</p>
            <p>Phone Number: {user.phone}</p>
            <ol>
                <li>Address:</li>
                <ul>
                <li>City: {user.address.city}</li>
                <li>Street: {user.address.street}</li>
                <li>Street Number: {user.address.number}</li>
                <li>Zipcode: {user.address.zipcode}</li>
                </ul>
                <li>GeoLocation:</li>
                <ul>
                    <li>Latitude: {user.address.geolocation.lat}</li>
                    <li>Longitude: {user.address.geolocation.long}</li>
                </ul>
            </ol>
        </div>
      ))}
    </>
  )
}
