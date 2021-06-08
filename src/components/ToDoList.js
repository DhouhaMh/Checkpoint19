import React from "react";
import { connect } from "react-redux";
import TodoCard from "./TodoCard";

const ToDoList = ({ todolist }) => {
  console.log("todolist", todolist);
  return (
    <div>
      {todolist && todolist.length
        ? todolist.map((todo, index) => {
            return <TodoCard key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay! 🎉😄"}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todolist: state.todo,
  };
};
export default connect(mapStateToProps, null)(ToDoList);
