import "./App.css";
import ToDo from "./components/ToDo";
import ToDos from "../../../models/Todos";
import { useEffect, useState } from "react";
import toDoServiceInstance from "./services/todo";

function App() {
  const [myToDos, setMyToDos] = useState<ToDos[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const todos = await toDoServiceInstance.getToDos();
    setMyToDos(todos);
  };

  return (
    <div className="App">
      <ToDo items={myToDos} />
    </div>
  );
}

export default App;
