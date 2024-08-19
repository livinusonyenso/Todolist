import React from 'react'
import sytles from './TodoListIteam.module.css'
import TodoItemMain from './TodoItemMain'

function ListItem({todos , setTodos}) {
  const sortedTodo = todos.slice().sort((a,b) => Number(a.done) - Number(b.done))

  const ItemChecker = sortedTodo > 0 ? sytles.list : 0 ; 

  return (
    <div className={ItemChecker}>{
      sortedTodo.map((item) =>(
        <TodoItemMain key={item.name}  item={item} todos={todos} setTodos={setTodos}/>
      ))
      
      }</div>
  )
}

export default ListItem