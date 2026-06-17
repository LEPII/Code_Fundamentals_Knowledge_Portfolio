import { useContext } from "react";
import TasksContext from "../contexts/taskContext.tsx";

const useTasks = () => useContext(TasksContext);

export default useTasks;