import ToDos from "../../../../models/Todos";

interface ToDoListProps {
  items: ToDos[];
}

function ToDo({ items }: ToDoListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}{" "}
          <button className="btn btn-outline-danger mx-2 rounded-pill">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDo;
