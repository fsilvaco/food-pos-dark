import { useEffect, useState } from "react"
import styled from "styled-components"
import { Heading } from "../Navigation/Heading"
import { Menu } from "../Navigation/Menu"

import api from "../../services/api"
import Card from "../Card"
import colors from "../../styles/colors"

export function Main() {
    const [foods, setFoods] = useState([])

    async function handleFoods() {
        const {data} = await api.get("/foods")
        setFoods(data)
    }

    useEffect(() =>{
        handleFoods()
    }, [])

    return (
        <Container>
            <Heading />
            <Menu />
                <CardTitle>Choose Dishes</CardTitle>
            <CardContainer> 
                    {foods.map(item => (

                        <Card food={item} />

                    ))}

            </CardContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    padding: 25px;
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    overflow-y: scroll;

    

    &&::-webkit-scrollbar {
        width: 1px;      
    } 
 
`

const CardTitle = styled.h2`
    font-size: 28px;
    color: ${colors.white};
    margin: 20px 0;
`