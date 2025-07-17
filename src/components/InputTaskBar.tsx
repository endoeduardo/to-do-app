import styles from './InputTaskBar.module.css';
import { PlusCircle } from 'phosphor-react';


export function InputTaskBar() {
    return (
        <form className={styles.inputTaskBar}>
            <input type="text" placeholder="Adicionar uma nova tarefa" />
            <button type="submit">
                Criar
                <PlusCircle size={14} />
            </button>
        </form>
    );
}