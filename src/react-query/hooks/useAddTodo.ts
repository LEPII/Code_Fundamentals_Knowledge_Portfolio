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
     onMutate: (newTodoInput: Todo) => {
       const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
       queryClient.setQueryData<Todo[]>(
         CACHE_KEY_TODOS,
         (currentCachedTodos = []) => [newTodoInput, ...currentCachedTodos], // to add the new todo to the cache before we get the response from the backend. This is important for optimistic update, because it makes the app feel more responsive, and it also reduces the number of calls to the backend, which can improve the performance of our app.  
       );
 
       queryClient.invalidateQueries({ queryKey: CACHE_KEY_TODOS });
       onAdd();
       return { previousTodos };
     },
     onSuccess: (savedTodoOutput, newTodoInput) => { 
       queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
         todos?.map((todo) => (todo === newTodoInput ? savedTodoOutput : todo)), // to update the todo in the cache with the id returned from the backend. This is important for optimistic update, because we add the new todo to the cache before we get the response from the backend, so we don't have the id of the new todo yet. So we need to update the cache with the id returned from the backend after we get the response.
       );
     },
 
     onError: (_err, _newTodoInput, context) => {
       if (!context) return;
         queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
       }
     })
}
//

// SIMPLIFIED VERSION WITHOUT OPTIMISTIC UPDATE ;) 

// const useAddTodo = (onAdd: () => void) => {
//   const queryClient = useQueryClient();
//   return useMutation<Todo, Error, Todo>({
//     mutationFn: todoServices.post,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: CACHE_KEY_TODOS });
//       onAdd();
//     },
//   });
// }      

export default useAddTodo;