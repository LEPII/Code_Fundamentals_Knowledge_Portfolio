import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = ({ pageParam = 1}) =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  // When using an infinite query, we cannot use a state variable to keep track of the page number because infiniteQuery handle pagination automatically.
  return useInfiniteQuery<Post[], Error>({
    // The query is a parameter for this query. Every time the value of the query changes, react query will fetch the posts for that user from the backend. Very similar to the dependency hook in the useEffect hook.
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    staleTime: 10 * 1000,
    keepPreviousData: true,
    // to keep track of the page number, InfiniteQuery have a function for that.
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export { usePosts };
