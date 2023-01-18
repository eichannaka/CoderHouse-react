import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg bg-secondary">
                    <div class="container-fluid">
                        <h1 class="titulo">Photo Galery</h1>
                        <Link to={'/'}>
                            <a class="navbar-brand" href="#">Home</a>
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Hombre</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Mujer</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <i class="bi bi-cart"></i>
                        </div>
                    </div>cle
                </nav>
            </header>
        </>
    );
}
export default NavBar;