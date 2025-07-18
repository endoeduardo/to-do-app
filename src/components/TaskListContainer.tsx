import styles from './TaskListContainer.module.css';
import { TaskList } from './TaskList';
import { useState } from 'react';

type Task = {
    id: string;
    task: string;
};

export function TaskListContainer() {
    const [listTasks, setListTasks] = useState<Task[]>([
        {id: '1', task: 'Estudar React'},
        {id: '2', task: 'Praticar TypeScript'},
        {id: '3', task: 'Criar projeto de exemplo'}
    ]);

    function handleAddTask(task: string) {
        const uuid = crypto.randomUUID();
        const newTask: Task = {
            id: uuid,
            task: task
        };
        setListTasks([...listTasks, newTask]);
    }

    function handleRemoveTask(id: string) {
        const updatedTasks = listTasks.filter(task => task.id !== id);
        setListTasks(updatedTasks);
    }

    return (
        
        <div className={styles.taskListContainer}>
            <header>
                <div>
                    <strong className={styles.taskStrongTitle}>Tarefas criadas:</strong>
                    <strong className={styles.taskStrongCount}>0</strong>
                </div>
                <div>
                    <strong className={styles.taskStrongTitle}>Concluídas:</strong>
                    <strong className={styles.taskStrongCount}>0</strong>
                </div>
            </header>
            <TaskList tasks={listTasks} onRemoveTask={handleRemoveTask}/>
        </div>
    );
}