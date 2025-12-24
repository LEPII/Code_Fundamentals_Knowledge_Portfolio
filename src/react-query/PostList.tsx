import { useState } from "react";
import { usePosts } from "./hooks/usePost";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  const [page, setPage] = useState(1);

  // here we pass a query object. This has nothing to do with react query, it's a common design pattern.
  // A query object is an object that contains all of the value for querying a set of objects.
  const { data, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>hol up hol up</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        className="form-select mb-3">
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {data?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page == 1}
        className="btn btn-primary my-3"
        onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button
        className="btn btn-primary my-3 ms-3"
        onClick={() => setPage(page + 1)}>
        Next{" "}
      </button>
    </>
  );
};

export default PostList;
