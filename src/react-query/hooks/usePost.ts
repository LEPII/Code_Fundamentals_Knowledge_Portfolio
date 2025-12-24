import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    // The query is a parameter for this query. Every time the value of the query changes, react query will fetch the posts for that user from the backend. Very similar to the dependency hook in the useEffect hook.
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    staleTime: 10 * 1000,
    keepPreviousData: true,
  });
};

export { usePosts };
