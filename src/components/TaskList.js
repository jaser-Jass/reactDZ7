import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasks/tasksSlice';

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, loading } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.title} {task.completed ? '(Выполнено)' : '(Не выполнено)'}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;