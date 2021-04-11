import React from 'react'
import styles from './СontentWrapper.module.scss'

export const СontentWrapper = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      {props.children}
    </div>
  </div>
)