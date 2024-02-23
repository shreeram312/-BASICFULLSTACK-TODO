export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div>
          <h1>{todo.title}</h1>
          <h3>{todo.description}</h3>
          <button>
            {todo.completed == true ? "Completed" : "Mark as complete"}
          </button>
        </div>
      ))}
    </div>
  );
}
