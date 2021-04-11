import React from 'react'
import styles from './Header.module.scss'

export const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.container}>
      <h1 className={styles.title}>Apricode To-Do</h1>
    </div>
  </header>
) 