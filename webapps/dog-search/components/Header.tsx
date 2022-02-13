import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <header className={styles['header']}>
      <span className={styles['header-text']}>
        Powered by the&nbsp;
        <a href="https://www.petfinder.com/developers/v2/docs/">
          Petfinder API
        </a>
      </span>
      <div className="@flex-grow" />
      <a
        href="https://github.com/willwill96/petfinder-api-apps"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className={styles['github-icon']}
          icon={faGithub}
          title="View code on Github"
        />
      </a>
    </header>
  )
}

export default Header
