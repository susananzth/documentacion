import myLogo from './assets/logo.png'
import './Nav.css'

function Nav() {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={myLogo} className="logo" alt="Logo de susananzth" />
                SusanaNzth
            </a>
        </div>
    </nav>
  )
}

export default Nav
