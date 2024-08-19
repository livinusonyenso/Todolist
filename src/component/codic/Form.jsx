import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState({ firstName: '', lastName : ''});
  
 function handleSubmit(e) {
  e.preventDefault(); 
  console.log(name)
}

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          onChange={(e) => setName({...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />

        <input type="text" 
        onChange={(e) =>  setName({...name, lastName:e.target.value})}
        value={name.lastName}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
