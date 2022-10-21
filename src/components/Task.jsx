import React from "react";

export default function Task(props) {
  return (
    <div
      className="singleEntry"
      style={{backgroundColor: props.completed ? "#bcffbc" : "#B8DFD8" }}
    >
      <i className="fa-solid fa-circle entry"></i>
      <p className="entry">{props.entryName}</p>
      <i
        class="fa-solid fa-check"
        onClick={() => props.handleUpdate(props.id)}
      ></i>
      <i
        className="fa-solid fa-xmark"
        onClick={() => props.handleDelete(props.id)}
      ></i>
    </div>
  );
}
