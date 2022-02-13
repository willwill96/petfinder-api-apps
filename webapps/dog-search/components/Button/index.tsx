import styles from './Button.module.css'
const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={`${props.className} ${styles.button}`} />
}
export default Button
