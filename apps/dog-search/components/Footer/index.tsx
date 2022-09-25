import concatClassNames from '../../utils/concat-class-names'
import styles from './Footer.module.css'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <footer className={concatClassNames(styles.root)}>
      <NextLink href="/privacy-policy">
        <a className={concatClassNames(styles.link)}>Privacy Policy</a>
      </NextLink>
    </footer>
  )
}

export default Footer
