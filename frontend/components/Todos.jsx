/*
todos = [{
 title: "Goto gym",
 description: "Goto gym"
}]
*/
import styles from "./CreateTodo.module.css";
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1 className={styles.input}>{todo.title}</h1>
            <h2 className={styles.input}>{todo.description}</h2>
            <button className={styles.button}>
              {todo.completed === true ? "Completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
