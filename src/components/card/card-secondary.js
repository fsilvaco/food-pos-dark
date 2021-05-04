import { Fragment } from "react"
import { useOrdersFood } from "../../context/orders"

export function CardSecondary() {
  const { orders } = useOrdersFood()
  return ( 
    <Fragment>
      {orders.map(order => (
        <p key={order.id}>{order.id}</p>
      ))}
    </Fragment>
  )
}