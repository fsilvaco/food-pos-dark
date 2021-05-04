import styled from "styled-components"
import colors from "../styles/colors"
import { Buttons } from "../components/button"

export function Order() {
  return (
    <Container>
      <OrderId>Orders #34562</OrderId>
      <ContainerButton>
          <Buttons active title="Dine In" />
          <Buttons active={false} title="To Go" />
          <Buttons active={false} title="Delivery" />
      </ContainerButton>
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

const ContainerButton = styled.div`
  margin-top: 40px;
`