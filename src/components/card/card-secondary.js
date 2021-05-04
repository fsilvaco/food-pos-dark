import { Fragment } from "react"
import { useOrdersFood } from "../../context/orders"

export function CardSecondary() {
  const { orders } = useOrdersFood()
  return ( 
    <Fragment>
      {orders.map(order => (
        <p style={{color: "#fff"}} key={order.id}>{order.name}</p>
      ))}
    </Fragment>
  )
}