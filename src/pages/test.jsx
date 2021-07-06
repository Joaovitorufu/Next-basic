import { Logo } from "../components/Logo";
import { NavBar } from "../components/NavBar";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";

export default function Test() {

    const [counter,setCounter] = useState(0);

    useEffect(() =>{
        console.log('atualizou');
    })

    return (
        <div className="app">
            <Logo/>
            <Header icon="teste" title="teste" subtitle="Para testar Coisas"/>
            <NavBar/>
            <Main>
                <h1>Contador: {counter}</h1>
                <button onClick={()=> setCounter(counter + 1)}>+</button>
                <button onClick={()=> setCounter(counter - 1)}>-</button>
                
            </Main>
            <Footer/>
        </div>
    )
}