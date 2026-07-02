import { useContext } from 'react';
import LoginStatus from './LoginStatus';
import TasksContext from './tasks/taskContext';
import useCounterStore from './counter/store';

const NavBar = () => {
  const {tasks} = useContext(TasksContext); 
  const counter = useCounterStore((state) => state.counter);
  
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <span className="badge text-bg-primary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;