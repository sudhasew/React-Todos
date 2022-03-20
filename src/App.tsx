import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./components/todoList";
import AddTitle from "./components/AddTitle";

function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      <AddTitle></AddTitle>
    </div>
  );
}

export default App;
