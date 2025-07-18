import styles from './TaskListContainer.module.css';
import { NotePencil } from 'phosphor-react';

export function TaskListContainer() {
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
        <div className={styles.emptyTaskList}>
            <NotePencil size={56} className={styles.notePencil}/>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    </div>
  );
}