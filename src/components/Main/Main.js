import styled from "styled-components"
import { Heading } from "../Navigation/Heading"
import { Menu } from "../Navigation/Menu"

export function Main() {
    return (
        <Container>
            <Heading />
            <Menu />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    padding: 25px;
`