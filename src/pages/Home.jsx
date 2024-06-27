import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../componentes/ComponenteNavbar";

export function Home(){
    return(
        <div>
            <NavBar />
            <h1>Adicionar conteudo para a pagina</h1>
            <hr />
            
        </div>
    );
}

