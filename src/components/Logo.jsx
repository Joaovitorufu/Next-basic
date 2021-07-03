import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/img/logo.png'
import styles from '../styles/Logo.module.css'

export const Logo = () => {
    return(
        <aside className={styles.logo}>
            <Link href="/" passHref>
            <Image
        width={150}
        height={150}
        src={logo}
        alt="Logo"
      />
            </Link>
        </aside>
    )
}
