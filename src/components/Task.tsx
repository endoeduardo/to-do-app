import styles from './Task.module.css'
import { Trash } from 'phosphor-react'
import React, { useState } from 'react';

interface TaskProps {
    task: string;
    id: string;
    onRemoveTask: (id: string) => void;
    onCompletion: (id: string) => void;
}

export function Task( { task, id, onRemoveTask, onCompletion}: TaskProps) {
    const [checked, setChecked] = useState(false)

    function handleRemoveTask() {
        onRemoveTask(id);
    }

    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        onCompletion(id);
    }

    return (
        <div className={styles.task}>
            <div className={checked ? styles.uncheckedTaskContent : styles.checkedTaskContent }>
                <input type="checkbox" checked={checked} onChange={handleCheckboxChange}/>
                <p>{task}</p>
            </div>
            <button title="Deletar tarefa" onClick={handleRemoveTask}>
                <Trash size={24} />
            </button>
        </div>
    )
}