import React, {useState} from 'react'



export default function CarsUpdate() {

    const ModelChange =() =>{
        setModel("EcoSport");

    }



    const [brand, setBrand] = useState('Ford');
    const [model, setModel] = useState('Mustang');
    const [color, setColor] = useState('2014');
    const [engine, setEngine] = useState('2400 BHP');
  return (
    <>
      <h1>My {brand}</h1>
      <p> Model : {model} Color : {color} Engine : {engine}</p>

      <h3>Model Change</h3>
      <input type="text" id='model'/>
      <button type='button' onSub={ModelChange}>Change Model</button>
    </>
  )
}
