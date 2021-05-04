import styled from "styled-components"
import colors from "../styles/colors"
import { Buttons } from "../components/button"
import { CardSecondary } from "../components/card/card-secondary"

export function Order() {
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
      </CardsContainer>
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
  color: ${colors.white}
`