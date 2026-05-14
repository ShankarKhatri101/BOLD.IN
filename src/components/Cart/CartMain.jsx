import CartLi from './CartLi'

import { useContext } from 'react'
import ContextProvider, { GlobalStore } from '../context/ContextProvider'


function CartMain() {
    const {cartData} = useContext(GlobalStore)
    return (
        <div className="CartMain">
            {
              cartData.map((e ,index)=>{
                return (<CartLi key ={index} img ={e.img}  name={e.name}     />)
            })}
        </div>

    )
}



export default CartMain

