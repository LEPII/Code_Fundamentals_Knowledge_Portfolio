import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import UserDetailPage from "./UserDetailPage";
import ContactPage from "./ContactPage";
import Layout from "./Layout";

const router = createBrowserRouter([
    {path: "/", element: <Layout />, children: [
        { index: true, element: <HomePage /> }, // index: true means that this route will be rendered when the path is exactly "/". This is useful for rendering a default page when the user navigates to the root of the application. The element property specifies the component that will be rendered for this route. In this case, it will render the HomePage component when the user navigates to "/".
        // Example with multiple paths { path: "/posts/:year/:month"},
        { path: "users", element: <UserListPage /> },
        { path: "users/:id", element: <UserDetailPage /> },
        { path: "contact", element: <ContactPage /> }
    ]}
])

export default router;