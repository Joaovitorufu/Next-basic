import { Logo } from "../components/Logo";
import { NavBar } from "../components/NavBar";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Image from "next/image"

export default function Users(props) {
    console.log(props)

    
    return (
        <div className="app">
            <Logo/>
            <Header icon="users" title="users" subtitle="Mostrando usuários cadastrados"/>
            <NavBar/>
            <Main>
                <h2>{props.dadosDoGitHub.name}</h2>
                <Image 
                src={props.dadosDoGitHub.avatar_url} 
                alt={props.dadosDoGitHub.name} 
                width={150}
                height={150}
                />
                <p>Twitter : @{props.dadosDoGitHub.twitter_username}</p>
                <p>sobre mim : {props.dadosDoGitHub.bio}</p>
                <p>conta criada : {props.dadosDoGitHub.created_at}</p>
            </Main>
            <Footer/>
        </div>
    )
}

export async function getStaticProps(){
    const retornoDaAPI = await fetch('https://api.github.com/users/joaovitorufu')
        .then((response) =>{
            return response.json();
        });
       
    return{
        props:{
            dadoViaStaticProps:'dado simples vindo do static props',
            dadosDoGitHub: retornoDaAPI,
        }
    }
}

