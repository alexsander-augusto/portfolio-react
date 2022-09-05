import { Link } from 'react-router-dom'

import "../styles/components/navbar.sass"

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar