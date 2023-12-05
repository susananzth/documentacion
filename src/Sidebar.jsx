import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <Link to='/fundamental' className="nav-link">Fundamentos</Link>
            </li>
            <li className="list-group-item">
                <Link to='/html' className="nav-link">HTML</Link>
            </li>
            <li className="list-group-item">
                <Link to='/css' className="nav-link">CSS</Link>
            </li>
            <li className="list-group-item">
                <Link to='/javascript' className="nav-link">Javascript</Link>
            </li>
            <li className="list-group-item">
                <Link to='/data_science' className="nav-link">Ciencia de datos</Link>
            </li>
        </ul>
    )
}

export default Sidebar
