import styles from './Button.module.css'
const Button = (props) => {
  return <button {...props} className={`${props.className} ${styles.button}`} />
}
export default Button
