import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from './component_ui/pages/Homepage';
import Update from './component_ui/pages/Update';
import Create from './component_ui/pages/Create';
import Show from './component_ui/pages/Show';



export default function Website() {
  return (
    <>    
      <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Update' element={<Update/>}/>
          <Route path='/Show' element={<Show/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>

)
}
