function NavBar() {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg bg-secondary">
                    <div class="container-fluid">
                        <h1 class="titulo">Nomades</h1>
                        <a class="navbar-brand" href="#">Home</a>
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
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Otras
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Accesorios</a></li>
                                        <li><a class="dropdown-item" href="#">Joyeria</a></li>
                                        <li><a class="dropdown-item" href="#">Belleza</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <i class="bi bi-cart"></i>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default NavBar;