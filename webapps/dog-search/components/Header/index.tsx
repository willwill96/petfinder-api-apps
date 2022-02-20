import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import IconButton from '../IconButton'
import Tooltip from '../Tooltip'

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
      <div className="tw-flex-grow" />
      <Tooltip content="View Source Code" alignHorizontal="right">
        <a
          href="https://github.com/willwill96/petfinder-api-apps"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <FontAwesomeIcon icon={faGithub} />
          </IconButton>
        </a>
      </Tooltip>
    </header>
  )
}

export default Header
