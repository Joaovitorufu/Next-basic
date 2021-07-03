import styles from '../styles/Nav.module.css'

export const NavItem = ({icon, href, name}) => {
    return(

    <a className={styles.menuA} href={href}>
         <i className={`fa fa-${icon}`}></i> {name}
    </a>
    )
}