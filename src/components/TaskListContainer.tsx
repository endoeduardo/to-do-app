import styles from './TaskListContainer.module.css';
import { TaskList } from './TaskList';

type Task = {
  id: string;
  task: string;
  isCompleted: boolean;
};

interface TaskListContainerProps {
    handleRemoveTask: (id: string) => void;
    onCompletion: (id: string) => void;
    tasks: Task[];
}

export function TaskListContainer({handleRemoveTask, onCompletion, tasks}: TaskListContainerProps) {
    return (
        
        <div className={styles.taskListContainer}>
            <header>
                <div>
                    <strong className={styles.taskStrongTitle}>Tarefas criadas:</strong>
                    <strong className={styles.taskStrongCount}>{tasks.length}</strong>
                </div>
                <div>
                    <strong className={styles.taskStrongTitle}>Concluídas:</strong>
                    <strong className={styles.taskStrongCount}>{tasks.filter(task => task.isCompleted).length} de {tasks.length}</strong>
                </div>
            </header>
            <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} onCompletion={onCompletion}/>
        </div>
    );
}