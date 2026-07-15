import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  // an Outlet is a placeholder for the child routes. It will render the component of the child route that matches the current url. For example, if the current url is /users/1, it will render the UserDetailPage component. If the current url is /users/1/posts/2, it will render the PostDetailPage component.

  return (
    <>
      <NavBar />
      <div id="main">
        <Outlet /> 
    
      </div>
    </>
  );
};

export default Layout;
