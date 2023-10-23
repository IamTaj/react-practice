import React from 'react'
import ComponentB from './ComponentB'

export default function ComponentA() {
    const UserContext = React.createContext()
  
    return (
    <div className='container'>
        <UserContext.Provider value={'Taj'}>
        <ComponentB/>
        </UserContext.Provider>
    </div>
  )
}

