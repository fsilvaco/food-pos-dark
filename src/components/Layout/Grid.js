import styled from "styled-components"
import colors from "../../styles/colors"

export default function Grid(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex: 1;
    background-color: ${colors.dark_bg_1};
`