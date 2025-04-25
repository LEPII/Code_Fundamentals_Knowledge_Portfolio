import { JSX } from "react";
import ToDos from "../models/Todos";

interface ToDoListProps {
  items: ToDos[];
  onRemoveTodo: (id: number) => void;
}

function ToDoList({ items, onRemoveTodo }: ToDoListProps): JSX.Element {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <button
            onClick={() => onRemoveTodo(item.id)}
            className="btn btn-outline-danger mx-2 rounded-pill">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
