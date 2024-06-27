import { Container } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/ComponenteNavbar";
function Produto (){
    return(
        <Container>
            <NavBar />

            <p>Aqui vai o produto</p>
        </Container>
    )
}

export { Produto };