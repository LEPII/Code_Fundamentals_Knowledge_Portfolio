import { useReducer } from "react";
import HomePage from "./state-management/HomePage.tsx";
import Navbar from "./state-management/NavBar.tsx";
import TaskProvider from "./state-management/TaskProvider.tsx";


function App() {
  return (
    <TaskProvider>
      <Navbar />
      <HomePage />
    </TaskProvider>
  )
}

export default App;
