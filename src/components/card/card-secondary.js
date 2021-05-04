import { Fragment } from "react"
import { useOrdersFood } from "../../context/orders"

import photo from "../../../public/foods/images.png"
import styled from "styled-components"
import colors from "../../styles/colors"

import trash from "../../../public/trash.svg"

export function CardSecondary() {
  const { orders } = useOrdersFood()
  return ( 
    <Fragment>
      {orders.map(order => (
        <Card key={order.id}>
          <CardWrapper>

            <CardInfo style={{flex: 2}}>
              <CardImage src={photo} />
              <div>
                <CardTitle>{order.name}</CardTitle>
                <CardPrice>$ {order.price}</CardPrice>
              </div>
            </CardInfo>

            <CardQty style={{flex: 1}}>
              <InputQty value={1}/>
            </CardQty>

            <CardTotalPrice>
              <TotalPrice>$ {order.price}</TotalPrice>
            </CardTotalPrice>

          </CardWrapper>
          <CardAdditional>
            <div style={{flex: 1}}>
              <OrderNote placeholder={"Order Note..."}/>
            </div>
            <div>
              <RemoveButton>
                <img src={trash} />
              </RemoveButton>
            </div>
          </CardAdditional>
        </Card>
      ))}
    </Fragment>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

`

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CardInfo = styled.div`
  display: flex;
  align-items: center;
`

const CardImage = styled.img`
  width: 50px;
  margin-right: 10px;
`
const CardTitle = styled.p`
  font-size: 14px;
  color: ${colors.white};
  white-space: nowrap;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis; 
`
const CardPrice = styled.p`
  font-size: 12px;
  color: ${colors.light};
`
const CardQty = styled.div`
`
const InputQty = styled.input`
  width: 45px;
  height: 45px;
  background-color: ${colors.form_bg};
  border-radius: 8px;
  border: none;
  border: 1px solid ${colors.dark_line};
  text-align: center;
  color: ${colors.white};
`

const CardTotalPrice = styled.div`
`

const TotalPrice = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.white};
`

const CardAdditional = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

const OrderNote = styled.input`
  max-width: 100%;
  width: 300px;
  height: 45px;
  background-color: ${colors.form_bg};
  border-radius: 8px;
  border: none;
  border: 1px solid ${colors.dark_line};
  padding-left: 10px;
`

const RemoveButton = styled.button`
  height: 48px;
  width: 48px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid #FF7CA3;
`
