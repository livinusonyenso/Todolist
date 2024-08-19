import React from 'react'

function Message() {
    function handleClick (){
        console.log('button clicked')
    }
  return (
    <div>
        <button onClick={handleClick}>click to get a Message</button>
    </div>
  )
}

export default Message