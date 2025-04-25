import "./App.css";
import ToDoList from "./components/ToDoList";
import ToDos from "./models/Todos";
import { useEffect, useState } from "react";
import toDoServiceInstance from "./services/todo";
import NewToDo from "./components/NewToDo";

function App() {
  const [myToDos, setMyToDos] = useState<ToDos[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const todos = await toDoServiceInstance.getToDos();
    setMyToDos(todos);
  };

  const removeTodo = (id: number) => {
    setMyToDos(myToDos.filter((reminder) => reminder.id !== id));
  };

  const addTodo = async (title: string) => {
    const newToDo = await toDoServiceInstance.addToDo(title);
    setMyToDos([newToDo, ...myToDos]);
  };

  return (
    <div className="App">
      <NewToDo onAddToDo={addTodo} />
      <ToDoList items={myToDos} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;
