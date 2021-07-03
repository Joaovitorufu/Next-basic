import styles from '../styles/Header.module.css'

export const Header = (props) => {

    return (
            <header className={`${styles.header} d-none d-sm-flex flex-column`}>
           <h1 className={`${styles.headerH1} mt-3`}>
               <i className={`fas fa-${props.icon}`}></i>{props.title}
           </h1>
           <p className={`lead text-muted`}>{props.subtitle}</p>
        </header>
    )
}