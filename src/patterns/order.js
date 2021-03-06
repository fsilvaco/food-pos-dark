import styled from "styled-components"
import colors from "../styles/colors"
import { Buttons } from "../components/button"
import { CardSecondary } from "../components/card/card-secondary"
import { useOrdersFood } from "../context/orders"
import { useEffect, useRef, useState } from "react"

export function Order() {

  const {orders} = useOrdersFood()
  const [total, setTotal] = useState(0);

  const cardSecondaryEndRef = useRef(null);

  function handleTotalPrice() {
    if(orders.length >= 1) {
      const value = orders.reduce(function(total, order){
        return total + order.price;
      }, 0);
      setTotal(value.toFixed(2));
    } if (orders.length === 0) {
      setTotal(0)
    }
  }

  function scrollToBottom(){
    cardSecondaryEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(()=> {
    handleTotalPrice();
    scrollToBottom();
  }, [orders])

  return (
    <Container>
      <OrderId>Orders #34562</OrderId>
      <ContainerButton>
          <Buttons active title="Dine In" />
          <Buttons active={false} title="To Go" />
          <Buttons active={false} title="Delivery" />
      </ContainerButton>
      <Table>
        <TableItem style={{flex: 2}}>Item</TableItem>
        <TableItem style={{flex: 1}}>Qty</TableItem>
        <TableItem>Price</TableItem>
      </Table>
      <CardsContainer>
        <CardSecondary />
        <div ref={cardSecondaryEndRef}></div>
      </CardsContainer>

      <TotalContainer>
        <TotalItem>
          <TotalItemTitle>Discount</TotalItemTitle>
          <TotalItemValue>$ 0</TotalItemValue>
        </TotalItem>
        <TotalItem>
          <TotalItemTitle>Sub total</TotalItemTitle>
          <TotalItemValue>$ {total}</TotalItemValue>
        </TotalItem>
        <Buttons
          fluid 
          active 
          title="Continue to Payment"/>
      </TotalContainer>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.dark_bg_2};
  padding: 25px;
`
const CardsContainer = styled.div`
  flex: 1;
  overflow-y: scroll;   

  &&::-webkit-scrollbar {
      width: 1px;      
  }
  
`

const OrderId = styled.h2`
  font-size: 20px;
  color: ${colors.white};
`

const ContainerButton = styled.div`
  margin-top: 40px;
`

const Table = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  border-bottom: 1px solid ${colors.dark_line};
  padding-bottom: 20px;
`

const TableItem = styled.p`
  color: ${colors.white};
`

const TotalContainer = styled.div`
  border-top: 1px solid ${colors.dark_line};
  padding-top: 30px;
`

const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

const TotalItemTitle = styled.p`
  color: ${colors.light};
  font-size: 16px;
`
const TotalItemValue = styled.p`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
`

