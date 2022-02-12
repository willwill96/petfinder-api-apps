import React from 'react'
import styles from './Input.module.css'
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} className={`${props.className || ''} ${styles.input}`} />
  )
}
export default Input
