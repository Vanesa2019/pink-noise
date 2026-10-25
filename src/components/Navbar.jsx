
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { totalUnits } = useCart()

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="brand" aria-label="Pink Noise, inicio">
          pink noise<span>.</span>
        </Link>

        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Vinilos
          </NavLink>

          <NavLink
            to="/carrito"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Carrito
            <span className="cart-badge">{totalUnits}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
