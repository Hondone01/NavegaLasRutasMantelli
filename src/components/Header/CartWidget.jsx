import { Link } from 'react-router-dom'
import { useGlobalStates } from '../../context/Context'

const CartWidget = () => {
  const { calcularItems } = useGlobalStates()

  return (
    <div className='cart-widget'>
      <Link to='/cart'>
        🛒
        {calcularItems > 0 && <span className='cart-count'>{calcularItems}</span>}
      </Link>
    </div>
  )
}

export default CartWidget

