import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Home } from "../pages/Home";
import { Produto } from "../pages/Produtos";
import { Login } from "../pages/Login";
export function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={ <Home/>}/>
                <Route path="/produto" element={ <Produto/>}/>
                <Route path="/login"   element={ <Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}