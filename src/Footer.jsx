import myLogo from './assets/logo.png'
import './Footer.css'

function Footer() {
    return (
        <div id="footer" className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                        <img src={myLogo} className="logo" alt="Logo de susananzth" />
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Susana Piñero Rodríguez</span>
                </div>

                <ul className="nav col justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Curriculum CV</a>
                    </li>
                </ul>
            </footer>
        </div>

    )
}

export default Footer
