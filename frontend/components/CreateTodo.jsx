import { useState } from "react";
import styles from "./CreateTodo.module.css";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>{" "}
      <br></br>
      <input
        className={styles.input}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      ></input>{" "}
      <br></br>
      <button
        className={styles.button}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "content-type": "application/json",
            },
          }).then(async function (res) {
            const response = await res.json();
            alert("Todo created");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
