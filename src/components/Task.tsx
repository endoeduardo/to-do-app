import styles from './Task.module.css'
import { Trash } from 'phosphor-react'
import React, { useState } from 'react';

interface TaskProps {
    task: string;
}

export function Task( { task}: TaskProps) {
    const [checked, setChecked] = useState(false)

    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        const isChecked = event.target.checked;
        setChecked(isChecked);
    }
    return (
        <div className={styles.task}>
            <div className={checked ? styles.uncheckedTaskContent : styles.checkedTaskContent }>
                <input type="checkbox" checked={checked} onChange={handleCheckboxChange}/>
                <p>{task}</p>
            </div>
            <button title="Deletar tarefa">
                <Trash size={24} />
            </button>
        </div>
    )
}