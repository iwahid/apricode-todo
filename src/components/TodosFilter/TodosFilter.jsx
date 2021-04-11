import React from 'react'
import storeTodos from '../../store/todos'
import styles from './TodosFilter.module.scss'

/**
 * Component for filtering the todo list to display
 * 
 * @param {string} activeFilter - filter-flag (all, completed, unCompleted)
 */
export const TodosFilter = ({ activeFilter }) => {

  const handleChangeFilter = (filter) => {
    storeTodos.selectedFilter = filter
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.filterList}>
          <li>
            <button
              className={`${styles.filterList__item} ${activeFilter === 'all' && styles.filterList__item_active}`}
              onClick={() => handleChangeFilter('all')}
            >Все <span>{storeTodos.allTodoCount}</span></button>
          </li>
          <li>
            <button
              className={`${styles.filterList__item} ${activeFilter === 'unCompleted' && styles.filterList__item_active}`}
              onClick={() => handleChangeFilter('unCompleted')}
            >Актуальные <span>{storeTodos.completedTodoCount}</span></button>
          </li>
          <li>
            <button
              className={`${styles.filterList__item} ${activeFilter === 'completed' && styles.filterList__item_active}`}
              onClick={() => handleChangeFilter('completed')}
            >Выполненые <span>{storeTodos.unCompletedTodoCount}</span></button>
          </li>
        </ul>
      </div>
    </div>
  )
}