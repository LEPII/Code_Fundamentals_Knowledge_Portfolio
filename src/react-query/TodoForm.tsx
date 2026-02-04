import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import axios from 'axios';
import { Todo } from "./hooks/useTodos"

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {

  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) => axios
      .post("https://jsonplaceholder.typicode.com/todos", todo)
      .then(res => res.data),
    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (todos = []) => [
        newTodo,
        ...todos,
      ]);

      queryClient.invalidateQueries({ queryKey: ["todos"] });
      if (ref.current) ref.current.value = "";
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => todo === newTodo ? savedTodo : todo),
      );
    },

    onError: (err, newTodo, context) => {
      if (!context) return 
        queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
      }
    })

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && <div className="alert alert-danger">
        {addTodo.error.message}
      </div>}
      <form className="row mb-3" onSubmit={event => {
        event.preventDefault();

        if (ref.current && ref.current.value) addTodo.mutate({
          id: 0,
          title: ref.current?.value,
          completed: false,
          userId: 1,
        })

      }}>
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button disabled={addTodo.isLoading} className="btn btn-primary">{addTodo.isLoading ? "Adding..." : "Add"}</button>
        </div>
      </form></>
  );
};

export default TodoForm;
