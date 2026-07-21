import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {

  const error = useRouteError();
  isRouteErrorResponse(error)

  return (
    <>
      <h1>Oops...</h1>
      {isRouteErrorResponse(error) ? "invalid route" : "expected error"}
    </>
  );
};

export default ErrorPage;
