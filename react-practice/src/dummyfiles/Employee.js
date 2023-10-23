import React, {useState} from 'react'

export default function Employee() {
    const[designation, setdesignation] = useState("Hello");
  return (
    <>
        <h1>Hello I'am Ron and my designation is {designation}</h1>
        <button type='button' onClick={() =>setdesignation("Developer")}>Developer</button>
        <button type='button' onClick={() =>setdesignation("Tester")}>Tester</button>
        <button type='button' onClick={() =>setdesignation("Recruiter")}>Recruiter</button>
        <button type='button' onClick={() =>setdesignation("Manager")}>Manager</button>
      
    </>
  )
}
