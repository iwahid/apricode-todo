import React from 'react'
import styles from './Input.module.scss'

/**
 * Styled input component
 * 
 * @param {string} value - The value in the input
 * @param {function} changeValue - Method for getting data from a component
 * @param {function} onsubmit - Method listening for the "Enter" key press event
 *  
 */
export const Input = ({ value, changeValue, onsubmit }) => {

  const keyPressHandler = (e) => {
    if (e.key === "Enter")
      onsubmit()
  }

  return (
    <input
      className={styles.input}
      placeholder='Введите текст...'
      value={value}
      onChange={(e) => changeValue(e.target.value)}
      onKeyPress={(e) => keyPressHandler(e)}
    />
  )
}