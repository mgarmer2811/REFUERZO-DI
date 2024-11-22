import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Comprar leche', done: true },
  { id: 1, title: 'Comer tacos', done: false },
  { id: 2, title: 'Preparar té', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  /* function handleAddTodo(title) {
    todos.push({
      id: nextId++,
      title: title,
      done: false
    });
  } */

  function handleAddTodo(title) {
    setTodos(todos.concat({id: nextId++, title: title, done: false}));
  }

  /* function handleChangeTodo(nextTodo) {
    const todo = todos.find(t =>
      t.id === nextTodo.id
    );
    todo.title = nextTodo.title;
    todo.done = nextTodo.done;
  } */

  function handleChangeTodo(nextTodo) {
    const newTodos = todos.map(todo => {
      if(todo.id === nextTodo.id){
        return {...todo, title: nextTodo.title, done: nextTodo.done}
      }
      else{
        return todo;
      }
    })
    setTodos(newTodos);
  }

  /* function handleDeleteTodo(todoId) {
    const index = todos.findIndex(t =>
      t.id === todoId
    );
    todos.splice(index, 1);
  } */

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(p => p.id !== todoId));
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
