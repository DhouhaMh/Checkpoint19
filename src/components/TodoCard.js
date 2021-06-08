import React from "react";
import { connect } from "react-redux";
import { delete_todo, toggle_todo } from "../redux/action/action";
import EditTodo from "./EditTodo";

const TodoCard = ({ todo, delete_todo, toggle_todo }) => {
  //   console.log("todo", todo);
  const deletetodo = () => {
    delete_todo(todo.id);
  };
  return (
    <div
      className="display-todo-card"
      style={
        todo.isComplete
          ? {
              transform: "rotateX(360deg)",
              transition: "transform 850ms",
              backgroundColor: "#845ec2",
            }
          : {}
      }
    >
      <div className="display-item">
        <button onClick={() => toggle_todo(todo.id)} className="btn-item">
          {todo.isComplete ? "👌" : "👋"}
        </button>
        <EditTodo todo={todo} />
        <p
          style={
            todo.isComplete
              ? { textDecoration: "line-through white", color: "#b8b5ff" }
              : { color: "#440a67" }
          }
        >
          {todo.text}
        </p>
      </div>
      <button
        className="btn-delete"
        onClick={deletetodo}
      >
        ✘
      </button>
    </div>
  );
};

export default connect(null, { delete_todo, toggle_todo })(TodoCard);
