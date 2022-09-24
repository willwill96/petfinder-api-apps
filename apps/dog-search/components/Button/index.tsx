import conditionallyAddClassnames from '../../utils/concat-class-names'
import styles from './Button.module.scss'
const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={conditionallyAddClassnames(props.className, styles.button)}
    />
  )
}
export default Button
