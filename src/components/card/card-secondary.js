import { useOrdersFood } from "../../context/orders"

export function CardSecondary() {
  const { orders } = useOrdersFood()
  return ( 
    <div>
      {orders.map(order => (
        <p key={order.id}>{order.id}</p>
      ))}
    </div>
  )
}