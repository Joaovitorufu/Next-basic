import { NavItem } from './NavItem';
import styles from '../styles/Nav.module.css'

export const NavBar = () => {
    return (
        <aside className={styles.menuArea}>
            <nav className="menu">
                <NavItem
                    icon ="home"
                    name ="Início"
                    href = "/"
                />
                <NavItem
                    icon ="users"
                    name ="Usuários"
                    href = "/users"
                />
                <NavItem
                    icon ="register"
                    name ="Registro"
                    href = "/register"
                />
                <NavItem
                    icon ="login"
                    name ="Login"
                    href = "/login"
                />
                <NavItem
                    icon ="test"
                    name ="test"
                    href = "/test"
                />
               
            </nav>
        </aside>
    )
}