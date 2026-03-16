// Write your code here
import {useContext} from 'react'
import CartContext from '../../context/CartContext'

const CartSummary = () => {
  const {cartList} = useContext(CartContext)

  const totalAmount = cartList.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const totalItems = cartList.length

  return (
    <div>
      <h1>Order Total</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Amount: {totalAmount}</p>
    </div>
  )
}

export default CartSummary
