import styled from "styled-components"
import colors from "../styles/colors"
import { Label } from "./Label"

export function Orders() {
  return (
    <Container>
      <OrderId>Orders #34562</OrderId>
      <ContainerLabel>
          <Label active title="Dine In" />
          <Label active={false} title="To Go" />
          <Label active={false} title="Delivery" />
      </ContainerLabel>
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

const OrderId = styled.h2`
  font-size: 20px;
  color: ${colors.white};
`

const ContainerLabel = styled.div`
  margin-top: 40px;
`