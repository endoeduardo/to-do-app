import styles from './InputTaskBar.module.css';
import { PlusCircle } from 'phosphor-react';

interface InputTaskBarProps {  onAddTask: (task: string) => void;
}

export function InputTaskBar({ onAddTask }: InputTaskBarProps) {
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const input = event.currentTarget.querySelector('input') as HTMLInputElement;
        const task = input.value.trim();
        if (task) {
            onAddTask(task);
            input.value = '';
        }
    }
    
    return (
        <form className={styles.inputTaskBar} onSubmit={handleSubmit}>
            <input type="text" placeholder="Adicionar uma nova tarefa" />
            <button type="submit">
                Criar
                <PlusCircle size={14} />
            </button>
        </form>
    );
}