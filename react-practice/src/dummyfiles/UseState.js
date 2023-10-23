import React,{useState} from 'react'

export default function UseState() {
    const[emp, setEmp] = useState({
        fname: "Sk",
        mname: "Tajuddin",
        lname: "Ali",
        id: "2060",
        des: "Developer",
        sal: "20000",
        comp: "TECHOUTS"
});

    const idChange = () =>{
        setEmp(emp.id("2040"));
    }

  return (
    <>
    <div className="container">
        <h1>{emp.fname} {emp.mname}{emp.lname}</h1>
        <h6>Designation: {emp.des}</h6>
        <h6>Employee id :{emp.id}</h6>
        <h6>Salary :{emp.sal}</h6>
    </div>
    <div className="container my-3">
    <button type="button" className="btn btn-secondary mx-1 " onClick={idChange}>ID</button>
    <button type="button" className="btn btn-secondary mx-1">DESIGNATION</button>
    <button type="button" className="btn btn-secondary mx-1">SAL</button>
    <button type="button" className="btn btn-secondary mx-1">Secondary</button>
    </div>
      
    </>
  )
}
