import React, { ReactNode, useReducer } from 'react'
import tasksReducer from './reducers/taskReducer';
import TasksContext from './contexts/taskContext';

interface Props {
    children: ReactNode
}

const TaskProvider = ({children}: Props) => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);
    return (
        <TasksContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TasksContext.Provider>
    )
}

export default TaskProvider