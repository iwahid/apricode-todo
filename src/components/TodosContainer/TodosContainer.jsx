import React from 'react'
import { TodosList } from './../TodosList';
import { TodosFilter } from './../TodosFilter';
import { observer } from 'mobx-react-lite';
import storeTodos from '../../store/todos';
import styles from './TodosContainer.module.scss'

/* Container for wrapping related components */
export const TodosContainer = observer(() => (
  <div className={styles.wrapper}>
    <TodosFilter activeFilter={storeTodos.selectedFilter}></TodosFilter>
    <TodosList todos={storeTodos.selectedTodos}></TodosList>
  </div>
))