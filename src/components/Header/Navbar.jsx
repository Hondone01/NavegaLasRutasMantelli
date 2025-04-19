import CartWidget from './CartWidget'
import { Link, useNavigate } from 'react-router'

const Navbar = () => {
  
  return (
    <header className="navbar">
      <img src='/public/assets/logomonster.png' alt='logo' className="logo" />
      <nav className="nav-links">
        <Link to='/home'>Inicio</Link>
        <Link to='/contact'>Contacto</Link> 
        <Link to='/'>Productos</Link> 
        <Link to='/products/:category'>Sustratos y Complementos</Link> 
        <Link to='/products/:category'>Fertilizantes</Link> 
        <Link to='/products/:category'>Parafernaria</Link> 
      </nav>

      <CartWidget />
    </header>
  )
}
 
export default Navbar
