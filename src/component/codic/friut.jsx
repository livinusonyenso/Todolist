import React from 'react'

function Friut({Name,Price,Emoji ,Soldout}) {
  return (
    // <div>{emoji} {name} {price}</div>
    <div>
  <li>{Emoji} {Name} {Price} {Soldout ? "SoldOut" : " "}</li> 
    </div>
  )
}

export default Friut