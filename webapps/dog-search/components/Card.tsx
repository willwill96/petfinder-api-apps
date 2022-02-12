import React from 'react'
import styles from './Card.module.css'
const Card = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={`${props.className} ${styles.card}`}>
      {props.children}
    </div>
  )
}
export default Card
