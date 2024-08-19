import React, {useState} from 'react'
import styles from './Form.module.css'

function Form({todos, setTodos}) {
   // const [todo, setTodo] = useState('');
    const [todo, setTodo] = useState({name:'', done: false});

    function handleSubmit(e){
        e.preventDefault();
        if(todo.name.length > 1){
        setTodos([...todos,todo])
        setTodo({name:'', done: false})
        }


        
    }  
  return (  
    <form className={styles.todoform}  onSubmit={handleSubmit}>
        <div className={styles.InputContainer}>
     <input 
     className={styles.mordenInput}
     type="text"
      placeholder='Enter todo iteam....'  
      onChange={(e) => setTodo({name:e.target.value, done:false})}
      value={todo.name} />
      <button className={styles.mordenButton} type="submit">Add</button>
      </div>
      </form>
  )
}

export default Form