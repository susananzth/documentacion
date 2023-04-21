import myLogo from './assets/logo.png'
import './Nav.css'

function Nav() {
  return (
    <nav className="container">
        <div className="d-flex flex-wrap justify-content-center py-3 mb-4">
            <a className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto" href="#">
                <img src={myLogo} className="logo" alt="Logo de susananzth" />
                Bootstrap
            </a>
            <ul className="nav nav-pills">
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
        </div>
    </nav>
  )
}

export default Nav
