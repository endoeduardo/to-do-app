import styles from './Header.module.css'
import { Rocket } from 'phosphor-react'

export function Header() {
    return (
        <header className={styles.header}>
            <Rocket size={32} className={styles.rocketIcon} />
            <h1 className={styles.h1Blue}>to</h1>
            <h1 className={styles.h1PurpleDark}>do</h1>
        </header>
    )
};