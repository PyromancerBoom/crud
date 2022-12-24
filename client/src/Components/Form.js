import React, { useState } from "react";
import "./form.css";

const Form = () => {
  // store the value to send to the database
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="info">
      <label>User:</label>
      <input type="text" />
      <label>Age:</label>
      <input type="number" />
      <label>Comment:</label>
      <input type="text" />
      <button>Add</button>
    </div>
  );
};

export default Form;
