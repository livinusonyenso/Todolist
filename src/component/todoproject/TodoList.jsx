import React, { useState } from 'react'
import ListItem from './ListItem';
import Form from './Form';
import Footer from './Footer';

function TodoList() {
    const [todos, setTodos] = useState([])
    const completed = todos.filter((todo) => todo.done).length
    const totalTodos = todos.length

  return (
    <div  >
      <Form todos={todos} setTodos={setTodos}/>
      <ListItem  todos={todos}  setTodos={setTodos}/>
     < Footer completed={completed}  totalTodos={totalTodos} />
        </div>
  )
}

export default TodoList