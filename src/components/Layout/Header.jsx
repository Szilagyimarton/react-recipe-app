
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header>
      <Link to="/">Meals</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/area">Area</Link>
    </header>
  )
}

export default Header