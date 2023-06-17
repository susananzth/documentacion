import './Sidebar.css'

function Sidebar() {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <a className="nav-link" href="https://susananzth.com/documentacion/html/index.html">HTML</a>
            </li>
            <li className="list-group-item d-none d-md-inline-block">
                <a className="nav-link" href="https://susananzth.com/documentacion/css/index.html">CSS</a>
            </li>
            <li className="list-group-item">
                <a className="nav-link" href="https://susananzth.com/documentacion/javascript/index.html">Javascript</a>
            </li>
        </ul>
    )
}

export default Sidebar
