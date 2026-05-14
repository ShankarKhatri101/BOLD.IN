import { useContext, useState } from 'react'
import { GlobalStore } from '../context/ContextProvider'
import ContextProvider from '../context/ContextProvider'


function CartCount({ cartTotal }) {
    const [totalItems, setTotalItems] = useState(0)
    const cartVar = useContext(GlobalStore)
    console.log("test is =", cartVar.cartData.length,cartVar.cartData )
    return (
        <div className="CartCount">
                {cartVar.cartData.length }
        </div>
    )
}
export default CartCount