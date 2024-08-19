import React from 'react'
import Code from './Code'
import Welcome from './Welcome'

function Conditional() {
    const display = true

   if(display){
    return <Welcome />
   }else <Code />
  
}

export default Conditional