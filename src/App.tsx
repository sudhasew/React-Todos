import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./components/todoList";
import AddPostTodo from "./components/AddPostTodo";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      <AddPostTodo></AddPostTodo>
      <UpdateTodo></UpdateTodo>
    </div>
  );
}

export default App;
