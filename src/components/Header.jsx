import { Link } from 'react-router-dom'
import "./Header.scss"

function Header({currentPage}) {
  return (
    <header>
      <h1>{currentPage}</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/units">Units</Link>
      </nav>
    </header>
  )
}

export default Header