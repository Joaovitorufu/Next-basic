import styles from'../styles/Main.module.css'
import {Fragment} from 'react'


export const Main = (props) => {

    return(
        <Fragment>
                <main className="content container-fluid">
                    <div className={`${styles.box} p-3 mt-3`}>
                        {props.children}
                        
                    </div>
                </main>
        </Fragment>
    )

}