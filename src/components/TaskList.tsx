import { Task } from './Task';
import styles from './TaskList.module.css';
import { NotePencil } from 'phosphor-react';

interface task { 
    id: string;
    task: string;
    isCompleted: boolean;
}

type TaskListProps = {
    tasks: task[]; 
    onRemoveTask: (id: string) => void;
    onCompletion: (id: string) => void;
}

export function TaskList({ tasks, onRemoveTask, onCompletion }: TaskListProps) {
    if (tasks.length === 0) {
        return (
            <div className={styles.emptyTaskList}>
                <NotePencil size={56} className={styles.notePencil}/>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div> 
        )
    }
    return (

        <div className={styles.taskList}>
            {tasks.map(task => (
                <Task key={task.id} id={task.id} task={task.task} onRemoveTask={onRemoveTask} onCompletion={onCompletion}/>
            ))}
        </div>
    )
}