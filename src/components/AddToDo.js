import React, { useState } from "react";
import { connect } from "react-redux";
import { add_todo } from "../redux/action/action";
import moment from "moment";
import "../App.css";

const AddToDo = ({ add_todo }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newtodo = {
      id: Math.random(),
      text: text,
      isComplete: false,
    };
    if (text.trim() === "") {
      alert("⚠ Oops! your todo is empty! Please, enter name item");
    } else {
      add_todo(newtodo);
      setText("");
    }
  };
  return (
    <div>
      <div className="titles">
        <img
          style={{ width: "100px", height: "100px" }}
          src="https://static-s.aa-cdn.net/img/gp/20600010996155/v6Z5TBhdRvmP52gJgJjKlaY_yyotslsyV7qsytfHl76MfMxMShHv4DSD29NsT6Xemw=s300?v=1"
          alt="to_do_list_img"
        />

        <h1 style={{ color: "#ffc75f" }}>To Do List</h1>
        <h3>Have a nice {moment().format("dddd")} 💪😃</h3>
      </div>
      <div className="display-add">
        <input
          className="input-add"
          type="text"
          placeholder="✍️ add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn-add" onClick={handleSubmit}>
          +
        </button>
      </div>
      <br />
    </div>
  );
};

export default connect(null, { add_todo })(AddToDo);
