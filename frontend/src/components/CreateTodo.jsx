import { useState } from "react";

export function CreateTodo() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  return (
    <div>
      <input
        style={{
          padding: 10,
        }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          const val = e.target.value;
          settitle(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        style={{
          padding: 10,
        }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          setdescription(e.target.value);
        }}
      />
      <br /> <br />
      <button
        style={{
          padding: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const ans = await res.json();
            alert("Todo added  to Database");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
