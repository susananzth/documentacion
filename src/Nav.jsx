import myLogo from './assets/logo.png'
import './Nav.css'

function Nav() {
    return (
        <nav className="container">
            <div className="d-flex flex-wrap justify-content-center py-3">
                <a className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto" href="#">
                    <img src={myLogo} className="logo" alt="Logo de susananzth" />
                    SusanaNzth
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="https://susananzth.com">Inicio</a>
                    </li>
                    <li className="nav-item d-none d-md-inline-block">
                        <a className="nav-link" href="https://susananzth.com/#about">Sobre mi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://susananzth.com/#portfolio">Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://susananzth.com/#contact">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <span className="d-none d-lg-inline-block">Curriculum</span> CV
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
