import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./components/todoList";
import AddPostTodo from "./components/AddPostTodo";

function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      <AddPostTodo></AddPostTodo>
    </div>
  );
}

export default App;
