import { useEffect, useState } from "react"
import styled from "styled-components"
import colors from "../../styles/colors"
import photo from "../../../public/foods/images.png"

import {useOrdersFood, useQtyFood} from "../../context/orders"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function CardPrimary(props) {

  const value = props.food.available

  const { orders, setOrders } = useOrdersFood();

  const [available, setAvailable] = useState(value);

  function saveOrderFood(food) {

    const isDuplicate = orders.some(order => order === food)

    if(!isDuplicate) {
      setOrders([...orders, food])
      setAvailable(available -1)
  
      if(available <= 1) {
        alert("Acabou!")
        setAvailable(0)
      }
    } else {
      toast('🍲 This dish has already been added to your orders', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  return (
    <Container onClick={() => saveOrderFood(props.food)}>
       <ToastContainer />
      <ImageCard src={photo}/>
      <TitleCard>{props.food.name}</TitleCard>
      <PriceCard>$ {props.food.price}</PriceCard>
      <AvailableCard>{available} available</AvailableCard>
    </Container>
  )
}

const Container = styled.a`
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