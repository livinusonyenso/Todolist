import React from 'react'
import styles from './TodoListIteam.module.css'

export default function TodoItemMain({item,todos , setTodos}) {

  
  function handleDelet(item){
   setTodos(todos.filter((todo) => todo !== item))
  }

  function handleClick(name){
  const newTodos = todos.map((todo) => todo.name === name ? {...todo, done: !todo.done} : todo)
  setTodos(newTodos)
  console.log(todos)
  }
const classNameChecker = item.done ? styles.completed : ""

  return (
    <div className={styles.item} >
        <div className={styles.itemName}><h3 key={item}>
          <span className={classNameChecker} onClick={() => handleClick(item.name)}>{item.name}</span>
        <span>
          <button onClick={()=>handleDelet(item)} className={styles.deletButton}>x</button>
          </span>
        </h3>
        </div>
        <hr className={styles.line} />
    </div>
  )
}
