import CartWidget from './CartWidget'
import { Link } from 'react-router-dom' // Asegurate de importar desde 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar">
      <img src='/assets/logomonster.png' alt='logo' className="logo" />
      <nav className="nav-links">
        <Link to='/home'>Inicio</Link>
        <Link to='/contact'>Contacto</Link> 
        <Link to='/'>Productos</Link> 
        <Link to='/products/Sustratos'>Sustratos</Link> 
        <Link to='/products/Fertilizantes'>Fertilizantes</Link> 
        <Link to='/products/Parafernalia'>Parafernalia</Link> 
      </nav>
      <CartWidget />
    </header>
  )
}

export default Navbar

