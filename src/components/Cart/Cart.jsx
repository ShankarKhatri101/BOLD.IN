import React from 'react'
import CloseBtn from './CloseBtn'
import CartLogo from './CartLogo'
import CartMain from './CartMain'

function Cart({setTurncart ,cartTotal}) {
  return (
    <div className="Cart">
      <div className="cartTop"><CartLogo /><CloseBtn  setTurncart={setTurncart}/></div>
      <CartMain/>
    </div>
  )
}

export default Cart