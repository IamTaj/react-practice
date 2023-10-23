import React from 'react'

function MadeGoal(){
    return <h1>Goal !!!</h1>
}

function MissedGoal(){
    return <h1>Oops, Better Luck Next Time !</h1>
}

export default function Goal(props) {
    const isGoal = props.isGoal;
    return (
    <>
        {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </>
  )
}
