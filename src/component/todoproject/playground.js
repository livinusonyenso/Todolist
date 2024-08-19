let todos = [{name:'Breakfast', done: false},{name:'lunch', done: false},{name:'snakes', done: false},{name:'dinner', done: false}]
let name = 'lunch'
const newTodos = todos.map((todo) => todo.name === name ? {...todo, done : !todo.done} : todo)

console.log(newTodos);