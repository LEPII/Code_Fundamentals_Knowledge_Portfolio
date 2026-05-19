interface Task {
  id: number;
  title: string;
}

interface Action {
  type: "ADD_TASK" | "DELETE_TASK";
}

// const tasksReducer = (tasks: Task[], action: Action): Task[] => {

// };
