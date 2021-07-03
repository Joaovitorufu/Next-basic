import { Logo } from "../components/Logo";
import { NavBar } from "../components/NavBar";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Users() {
    return (
        <div className="app">
            <Logo/>
            <Header icon="users" title="users" subtitle="Mostrando usuários cadastrados"/>
            <NavBar/>
            <Main>
                {/* container de user */}
            </Main>
            <Footer/>
        </div>
    )
}