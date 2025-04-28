import { Link } from "react-router"

const CartWidget = () => {
  return (
    <div className='cart-widget'>
      <Link to='/cart'>
        🛒<span>0</span>
      </Link>
    </div>
  )
}

export default CartWidget
