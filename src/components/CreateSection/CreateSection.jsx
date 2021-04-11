import React, { useState } from 'react'
import storeTodos from '../../store/todos';
import { Button } from './../UI/Button';
import { Input } from './../UI/Input'
import { Todo } from '../../utils/todoConstructor'
import styles from './CreateSection.module.scss'

/** Component for creating new todo */
export const CreateSection = () => {

  const [inputValue, changeInputValue] = useState('')

  const createTodo = () => {
    if (inputValue.trim() !== '') {
      storeTodos.addTodo(new Todo(inputValue.trim()))
      changeInputValue('')
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Input value={inputValue} changeValue={changeInputValue} onsubmit={createTodo} />

        {inputValue.trim() &&
          <div className={styles.buttonWrapper}>
            <div className={styles.buttonContainer}>
              <Button onClick={() => createTodo()} type="success" title="Добавить задачу"></Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button onClick={() => changeInputValue("")} title="Отмена"></Button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}