import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/css/imagenes/check.png";
import Cart from "../Cart/Cart";

function NavBar() {
    return (
        <>
            <header>
                <div className="logo">
                <img src={logo} alt="Logo" width="40px"/>
                </div>
                <div className="navBar">
                    <Link to={'/'}>
                        <a class="navbar-brand" href="#">Inicio</a>
                    </Link>
                    <Link to={'/Hombre'}>
                        <a class="navbar-brand" href="#">Hombre</a>
                    </Link>
                    <Link to={'/Mujer'}>
                        <a class="navbar-brand" href="#">Mujer</a>
                    </Link>
                    <Link to={'/Otros'}>
                        <a class="navbar-brand" href="#">Otros</a>
                    </Link>
                    <Cart></Cart>
                </div>
            </header>
        </>
    );
}
export default NavBar;
