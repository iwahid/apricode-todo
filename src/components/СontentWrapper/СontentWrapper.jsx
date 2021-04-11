import React from 'react'
import styles from './СontentWrapper.module.scss'

/* Container for additional styling of current components */
export const СontentWrapper = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      {props.children}
    </div>
  </div>
)