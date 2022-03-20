import axios from "axios";
import { useEffect, useState } from "react";
import { GetAlltodo } from "../services/api";

export function TodoList() {
  const [toDolist, setToDoList] = useState<any[]>([]);
  useEffect(() => {
    GetAlltodo().then((data: any) => {
      setToDoList(data);
    });
  }, []);

  function deleteTodo(id: number) {
    console.log("deleting id", id);
    axios
      .delete("http://localhost:3004/todo/" + id)
      .then((res) => console.log(res));
  }

  return (
    <div>
      <ul className="toDoul">
        {toDolist.map((toDo, i) => (
          <li className="toDoli" key={toDo.id}>
            <h2>
              Id: <span> {toDo.id} </span>
            </h2>
            <h2>
              Title: <span> {toDo.title} </span>
            </h2>
            <h2>
              Description:
              <span> {toDo.description} </span>
            </h2>
            <h2>
              Due Date: <span> {toDo.due_date} </span>
            </h2>
            <h2>
              Copmleted:
              <span> {toDo.completed.toString()} </span>
            </h2>
            <h2>
              Delete Post:
              <span>
                <button className="delete" onClick={() => deleteTodo(toDo.id)}>
                  Delete
                </button>
              </span>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
