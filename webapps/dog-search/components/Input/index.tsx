import React from 'react'
import conditionallyAddClassnames from '../../utils/concat-class-names'
import styles from './Input.module.css'
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={conditionallyAddClassnames(props.className, styles.input)}
    />
  )
}
export default Input
