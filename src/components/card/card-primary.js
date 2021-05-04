import styled from "styled-components"
import colors from "../../styles/colors"
import photo from "../../../public/foods/1.svg"

export function CardPrimary(props) {
  return (
    <Container>
      <ImageCard src={photo}/>
      <TitleCard>{props.food.name}</TitleCard>
      <PriceCard>{props.food.price}</PriceCard>
      <AvailableCard>{props.food.available} available</AvailableCard>
    </Container>
  )
}

const Container = styled.div`
  flex-grow: 1;
	width: 25%;
  background-color: #1F1D2B;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

`

const ImageCard = styled.img``
const TitleCard = styled.h3`
  color: ${colors.white};
  font-size: 16px;
  margin: 20px 0
`
const PriceCard = styled.p`
  color: ${colors.lighter};
  font-size: 15px;
  font-weight: 400;
`
const AvailableCard = styled.p`
  color: ${colors.light};
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
`