import { createContext, useState } from 'react'

export const GlobalStore = createContext(null);
function ContextProvider(props) {
    const [cartData, setCartData] = useState([])
    return (
    <GlobalStore.Provider value = {{cartData, setCartData}}>
        {props.children}
    </GlobalStore.Provider>
  )
}

export default ContextProvider