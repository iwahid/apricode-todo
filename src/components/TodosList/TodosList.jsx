import React from 'react'
import { observer } from "mobx-react-lite"
import { TodoItem } from './../TodoItem';
import styles from './TodosList.module.scss'

/**
 * Component for rendering todos list
 *
 * @param {Object [ ]} todos Todos list
 * 
 */
export const TodosList = observer(({ todos }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo}></TodoItem>)}
      </div>
    </div>
  )
})