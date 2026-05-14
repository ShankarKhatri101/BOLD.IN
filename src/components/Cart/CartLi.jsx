import React from 'react'

function CartLi({img , name}) {
  return (
<div className="CartLi">
    <img src={img} alt="" />
    <p>{name}</p>
</div>
  )
}

export default CartLi