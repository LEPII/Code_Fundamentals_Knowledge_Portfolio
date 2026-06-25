import HomePage from "./state-management/HomePage.tsx";
import Navbar from "./state-management/NavBar.tsx";
import { TaskProvider } from "./state-management/tasks/index.ts";

function App() {
  return (
    <TaskProvider>
      <Navbar />
      <HomePage />
    </TaskProvider>
  )
}

export default App;