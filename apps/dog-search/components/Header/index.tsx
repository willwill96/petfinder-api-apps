import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import IconButton from '../IconButton'

const Header = () => {
  return (
    <header className={styles['header']}>
      <span className={styles['header-text']}>
        Powered by the&nbsp;
        <a
          className={styles['petfinder-link']}
          target="_blank"
          href="https://www.petfinder.com/developers/v2/docs/"
          rel="noreferrer"
        >
          Petfinder API
        </a>
      </span>
      <div className="@flex-grow" />
      <form
        action="https://github.com/willwill96/petfinder-api-apps"
        target="_blank"
      >
        <IconButton>
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
      </form>
    </header>
  )
}

export default Header
