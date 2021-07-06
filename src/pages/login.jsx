import { Logo } from "../components/Logo";
import { NavBar } from "../components/NavBar";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Login() {
    return (
        <div className="app">
            <Logo/>
            <Header icon="register" title="Register" subtitle="Registro de Usuários."/>
            <NavBar/>
            <Main>
                
                {/* container de user */}
            </Main>
            <Footer/>
        </div>
    )
}