import myLogo from './assets/logo.png'
import './Footer.css'

function Footer() {
    return (
        <div className="container">
            <footer className="d-md-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div className="col d-flex align-items-center justify-c-sm-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                        <img src={myLogo} className="logo" alt="Logo de susananzth" />
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Susana Piñero Rodríguez</span>
                </div>

                <ul className="nav col-auto justify-content-end justify-c-sm-center">
                    <li className="nav-item">
                        <a className="nav-link" href="https://susananzth.com">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://susananzth.com/#about">Sobre mi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://susananzth.com/#portfolio">Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item d-none d-md-inline-block">
                        <a className="nav-link" href="https://susananzth.com/#contact">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <span className="d-none d-lg-inline-block">Curriculum</span> CV
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
