import React from "react";
import { useState } from "react";
import Task from "./components/Task";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newEntry, setNewEntry] = useState("");

  // adding task
  const handleChange = (event) => {
    setNewEntry(event.target.value);
  };
  const addEntry = () => {
    const entry = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      entryName: newEntry,
      completed: false,
    };
    setTodoList([...todoList, entry]);
  };

  // delete
  const handleDelete = (id) => {
    setTodoList(todoList.filter((entry) => entry.id !== id));
  };

  //updated
  const handleUpdate = (id) => {
    setTodoList(
      todoList.map((entry) => {
        if (entry.id === id) {
          return { ...entry, completed: true };
        } else {
          return entry;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="container">
        <div className="input">
          <input type={'text'} placeholder="Type task here" onChange={handleChange}></input>
          <button>
            <i className="fa-solid fa-plus" onClick={addEntry}></i>
          </button>
        </div>
        <div className="task">
          <h1>To Do:</h1>
          <div className="entryContainer">
            {todoList.map((entry) => {
              return (
                <Task
                  entryName={entry.entryName}
                  id={entry.id}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  completed={entry.completed}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
