import styled from "styled-components"
import colors from "../../styles/colors";

export function Menu() {
  return (
    <Container>
      <LinkContainer>
        <Link active>Hot Dishes</Link>
      </LinkContainer>
      <LinkContainer>
        <Link>Cold Dishes</Link>
      </LinkContainer>
      <LinkContainer>
        <Link>Soup</Link>
      </LinkContainer>
      <LinkContainer>
        <Link>Grill</Link>
      </LinkContainer>
      <LinkContainer>
        <Link>Appetizer</Link>
      </LinkContainer>
      <LinkContainer>
        <Link>Dessert</Link>
      </LinkContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.dark_line};
  display: inline;
`;

const LinkContainer = styled.li`
  display: inline;
  padding-right: 40px;
`

const Link = styled.a`
  ${props => props.active && `
    color: ${colors.primary}!important;

    border-bottom: 5px solid ${colors.primary};
    padding-bottom: 18px;

  `}
  cursor: pointer;
  color: ${colors.white}
`
