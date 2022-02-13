import React from 'react'
import styles from './IconButton.module.css'
const IconButton = (props: { children: React.ReactChild }) => {
  return <div className={styles['icon-button']}>{props.children}</div>
}

export default IconButton
