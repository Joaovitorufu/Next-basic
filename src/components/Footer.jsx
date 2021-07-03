import styles from '../styles/Footer.module.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
    return(
        
    <footer className={styles.footer}>
        <span>
            Desenvolvido com <FontAwesomeIcon className="text-danger" icon={faHeart}/> por
            <strong> João Eugênio</strong>
        </span>
    </footer>
    )
}