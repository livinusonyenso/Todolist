import React, { useState } from 'react'

function Counter() {
    const  [count,setCout] = useState(0)
    const [increamenyBy, setIncreamenyBy] = useState(1)
    function IncreaseNumber(){
        setCout(count + increamenyBy)
    }
    function decreaseNumber(){
        setCout(count - increamenyBy)
    }

    function increaseIncreamentHandle (){
        setIncreamenyBy(increamenyBy + 1)
    }

    function DecreaseIncreamentHandle (){
        setIncreamenyBy(increamenyBy - 1)
    }
    

  return (
    <div>
        <h1>Current value is : {count}</h1>
        <button onClick={IncreaseNumber}><h1>Increase</h1></button>
        <button onClick={decreaseNumber}><h1>Decrease</h1></button>

        <h2>we are increasing by : {increamenyBy}</h2>
        <button onClick={increaseIncreamentHandle}>increase</button>
        <button onClick={DecreaseIncreamentHandle}>Decrease</button>
    </div>
  )
}

export default Counter