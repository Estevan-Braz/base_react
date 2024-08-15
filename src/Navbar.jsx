import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <Link to="/" > Inicio </Link>
            <Link to="/categorias" > Categorias </Link>
            <Link to="/produtos" > Produtos </Link>
        </>
    );
}