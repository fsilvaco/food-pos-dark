import { createContext, useContext, useState } from "react"

const OrdersContext = createContext();

export default function OrdersProvider({children}) {

  const [ orders, setOrders] = useState([])

  return (
    <OrdersContext.Provider value={{orders, setOrders}}>
      {children}
    </OrdersContext.Provider>
  )
}

export function useOrdersFood() {
  const context = useContext(OrdersContext);
  const { orders, setOrders } = context;

  return { orders, setOrders };
}