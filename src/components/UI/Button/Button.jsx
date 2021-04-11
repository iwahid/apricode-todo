import React from 'react'
import styles from './Button.module.scss'

export const BTN_SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const BTN_TYPE = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

/**
 * 
 * @param {Object} onClick Button onClick function
 * @param {string} title Button title
 * @param {string} size Button size (small | medium | large - optional)
 * @param {string} type Button type (success - optional)
 * 
 */
export const Button = (props) => (
  <button
    className={`
      ${styles.button} 
      ${props.size && styles[`button_${props.size}`]}
      ${props.type && styles[`button_${props.type}`]}
      `}
    onClick={props.onClick}

  >{props.title || props.children}</button>
)