import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

  // To fetch data with react query, we use the query hook.
  // Anytime we retrieve a piece of data from the backend, the data will be stored in the cache, and will be accessible via the queryKey.
  // You'll set it to an array of one or more values. The first value is often a string that identifies the type of data that we want to store here.
  // The second property is a query function which is the function that we use to fetch the data from the backend. It should return a promise that resolves the data or throw an error. We could use Axios or any HTTP libraries.
  // Pros:
  // - Automatic retries call to the server if the call fails.
  // - Automatic refresh
  // - Caching / The first time we get a piece of data, its stored in the cache and will be fresh for a certain period of time. If we need the data and it's still in the cache, you don't need to go to the sever, and we could get it directly from the cache which greatly improves the performance of our app.

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
