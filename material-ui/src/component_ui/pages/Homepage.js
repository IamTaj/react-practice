import React from 'react'
import MenuBar from '../MenuBar'
import {Button, Stack} from '@mui/material';
import {Link, Outlet} from "react-router-dom"

export default function Homepage() {
  return (
    <>
    <div className="container">
    <MenuBar/>
        <div className="container">
          <h1>Updating List</h1>
        <Stack direction="row" spacing={3}>
        <Link to="/Create"><Button variant="contained">Create</Button></Link>
        <Link to="/Update"><Button variant="contained">Update</Button></Link>
        <Link to="/Show"><Button variant="contained">Show</Button></Link>
        </Stack>
        <Outlet></Outlet>
        </div>
    </div>
    </>
  )
}
