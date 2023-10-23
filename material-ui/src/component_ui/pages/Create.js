import React,{useState} from 'react'
import {TextField} from '@mui/material'




export default function Create() {
//     const[data, setData] = useState(
//     data=[


//     ],
//     data.name="",
//     data.id="",
//     data.branch="",
//     data.contact="",
//     data.email="",

// )
  return (
    <>
    <div className="container">
        <center>
        <h2>Please Fill the details</h2>
        <form>
            <TextField id="outlined-basic" label="Name" variant="outlined" size='Small'/> <br /> <br />
            <TextField id="outlined-basic" label="ID" variant="outlined" size='Small'/> <br /> <br />
            <TextField id="outlined-basic" label="Branch" variant="outlined" size='Small'/> <br /> <br />
            <TextField id="outlined-basic" label="Contact Number" variant="outlined" size='Small'/> <br /> <br />
            <TextField id="outlined-basic" label="Email" variant="outlined" size='Small'/><br /> <br />
            <button size="small" variant="contained"
            onClick={(e)=>{
                this.input(e)
            }}>Add Data</button>
        </form>
        </center>
    </div>
      
    </>
  )
}
