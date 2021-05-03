import { useEffect, useState } from "react"
import styled from "styled-components"
import { Heading } from "../Navigation/Heading"
import { Menu } from "../Navigation/Menu"

import api from "../../services/api"

export function Main() {
    const [food, setFood] = useState()

    async function handleFoods() {
        const {data} = await api.get("/foods")
        setFood(data)
        }

    useEffect(() =>{
        handleFoods()
    }, [])

    return (
        <Container>
            <Heading />
            <Menu />

            <CardContainer> 
                <CardTitle>Choose Dishes</CardTitle>

                <AllCardContainer>
                    {/* <Card item={}  /> */}
                </AllCardContainer>

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
`

const CardTitle = styled.h2`
`

const AllCardContainer = styled.div`
`