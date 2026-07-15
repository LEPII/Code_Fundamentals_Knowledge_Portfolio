import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {

  const params = useParams() // with this we could get the params from the url. The params object will contain the values of the dynamic segments in the url. For example, if the url is /users/1, the params object will be { id: "1" }. If the url is /users/1/posts/2, the params object will be { id: "1", postId: "2" }.
  const [searchParams, setSearchParams] = useSearchParams() // with this we could get and update the query params from the url. The first element is the searchParams object and the second is a function to set the search params.
  // Example 
  console.log(searchParams.get("name")) // this will get the value of the query param "name" from the url. If the url is /users/1?name=John, this will log "John" to the console.
  // You can also set the search params using the setSearchParams function. For example, to set the query param "name" to "Jane", you can do:
  // setSearchParams({ name: "Jane" }) // this will update the url to /users/1?name=Jane
  // You have to be careful when using setSearchParams, as it will replace the entire search params object. If you want to update a single query param without losing the others, you can do:
  // setSearchParams({ ...Object.fromEntries(searchParams), name: "Jane" }) // this will update the url to /users/1?name=Jane&otherParam=value, keeping the other query params intact.
  //  You should only really use teh setSearchParams function when you want to update the query params in the url. If you just want to read the query params, you can use the searchParams object directly.
  // Keeping the component pure and not having side effects is a good practice. If you want to update the query params based on some user action, you can do that in an event handler or useEffect hook.
  const location = useLocation() // this hook returns the current location object, which contains information about the current url. You can use this to get the current pathname, search params, hash, etc. For example, you can use location.pathname to get the current pathname, or location.search to get the current search params.
  console.log(location) // this will log the current location object to the console. You can use this to debug and see what the current url is.
  return <p>User</p>;
};

export default UserDetailPage;
