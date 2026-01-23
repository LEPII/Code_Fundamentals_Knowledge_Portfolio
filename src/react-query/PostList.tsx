import { useState } from "react";
import { usePosts } from "./hooks/usePost";
import React from "react";

const PostList = () => {
  // const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  const [page, setPage] = useState(1);

  // here we pass a query object. This has nothing to do with react query, it's a common design pattern.
  // A query object is an object that contains all of the value for querying a set of objects.
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (isLoading) return <p>hol up hol up</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        className="form-select mb-3">
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3 ms-3"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "LoadMore"}
      </button>
    </>
  );
};

export default PostList;
