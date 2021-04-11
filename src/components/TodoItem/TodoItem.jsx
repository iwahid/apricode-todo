import React from 'react'
import storeTodos from '../../store/todos'
import styles from './TodoItem.module.scss'

/**
 * Single todo component
 * 
 * @param {object} todo - Single todo object
 */
export const TodoItem = ({ todo }) => {

  return (
    <div className={styles.todoItem}>
      <label className={styles.todoItem__label}>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => storeTodos.completeTodo(todo.id)}
        />
        <p className={styles.todoItem__text}>{todo.title}</p>
        <button
          className={styles.todoItem__remove}
          onClick={() => storeTodos.removeTodo(todo.id)}
        >X</button>
      </label>
    </div>
  )
}