import React from 'react'
import styles from './IconButton.module.css'

const IconButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={styles['icon-button']}>
      {props.children}
    </button>
  )
}

export default IconButton
