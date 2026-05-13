import React from 'react'
import CloseBtn from './CloseBtn'
import CartLogo from './CartLogo'

function Cart({setTurncart ,cartTotal}) {
  return (
    <div className="Cart">
      <div className="cartTop"><CartLogo /><CloseBtn  setTurncart={setTurncart}/></div>
      
    </div>
  )
}

export default Cart