import styled from "styled-components"
import { Heading } from "../Navigation/Heading"

export function Main() {
    return (
        <Container>
            <Heading />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    padding: 25px;
`