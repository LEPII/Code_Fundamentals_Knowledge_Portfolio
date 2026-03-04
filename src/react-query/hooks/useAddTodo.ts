import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoServices, {Todo} from "../services/todoServices";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
   return useMutation<Todo, Error, Todo, AddTodoContext>({
     mutationFn: todoServices.post,
     onMutate: (newTodo: Todo) => {
       const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
       queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
         newTodo,
         ...todos,
       ]);
 
       queryClient.invalidateQueries({ queryKey: CACHE_KEY_TODOS });
       onAdd();
       return { previousTodos };
     },
     onSuccess: (savedTodo, newTodo) => {
       queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
         todos?.map((todo) => todo === newTodo ? savedTodo : todo),
       );
     },
 
     onError: (err, newTodo, context) => {
       if (!context) return 
         queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
       }
     })
}

export default useAddTodo;