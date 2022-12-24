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
      {/* On change grabs teh input and sets the state variable to that input
      And this happens whenever there is a change in the input, even character by character */}
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <label>Age:</label>
      <input type="number" onChange={(event) => setAge(event.target.value)} />
      <label>Comment:</label>
      <input type="text" onChange={(event) => setComment(event.target.value)} />
      <button>Add</button>
    </div>
  );
};

export default Form;
