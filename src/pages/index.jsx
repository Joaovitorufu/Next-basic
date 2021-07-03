import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'
import {Main} from '../components/Main'
import { MainHome } from '../components/MainHome'
import { NavBar } from '../components/NavBar'
export default function Home() {
    return(

        <div className="app">
            <Logo/>
            <Header icon="home" title="Início" subtitle="Segundo Projeto do capítulo de React."/>
            <NavBar/>
            <Main icon="home" title="Início"
            subtitle="Segundo Projeto do capítulo de React."
            >
                <MainHome/>
            </Main>
            <Footer/>
        </div>
    )
}