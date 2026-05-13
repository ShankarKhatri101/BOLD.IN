import {useState} from 'react'

function CartCount ({ cartTotal}){
    const [totalItems, setTotalItems] = useState(0)

    return (
        <div className="CartCount">
            {cartTotal.length}
        </div>
    )
}
export default CartCount