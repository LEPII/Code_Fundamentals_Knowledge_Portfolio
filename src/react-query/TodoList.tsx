import useTodos from "./hooks/useTodos";

const TodoList = () => {

  // Our component here has a single responsibility which is being purely concerned with markup. 
  // It doesn't know how the data should be fetched. 
  // If somewhere else we have another component that requires the list of todos, in that component, we could the new hook. 
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
