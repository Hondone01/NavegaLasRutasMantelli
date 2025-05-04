import { Link } from 'react-router'
import { useGlobalStates } from '../../context/Context'

const CartWidget = () => {
  const { calcularItems } = useGlobalStates()
  return (
    <div>
      <Link to='/cart'>
        🛒<span>{calcularItems}</span>
      </Link>
    </div>
  )
}

export default CartWidget
