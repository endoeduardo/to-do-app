import styles from './TaskListContainer.module.css';
import { TaskList } from './TaskList';

type Task = {
  id: string;
  task: string;
};

interface TaskListContainerProps {
    handleRemoveTask: (id: string) => void;
    tasks: Task[];
}

export function TaskListContainer({handleRemoveTask, tasks}: TaskListContainerProps) {
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
            <TaskList tasks={tasks} onRemoveTask={handleRemoveTask}/>
        </div>
    );
}