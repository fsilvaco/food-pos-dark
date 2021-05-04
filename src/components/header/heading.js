import moment from "moment"
import styled from "styled-components"

import colors from "../../styles/colors"
import lupa from "../../../public/lupa.svg"

export function Heading() {
  const today = moment().format("dddd, D MMM YYYY")
  return (
    <Container>
      <div>
        <UserName>Flávio Silva</UserName>
        <TodayDate>{today}</TodayDate>
      </div>
        <InputContainer>
          <InputIcon src={lupa} />
          <InputText placeholder="Search for food, coffe, etc.."/>
        </InputContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  padding: 5px 0;
`
const UserName = styled.h1`
  color: ${colors.white};
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 10px;
`
const TodayDate = styled.h3`
  color: ${colors.lighter};
  font-weight: 400;
  font-size: 1.2rem;
`
const InputContainer = styled.div`
  display:flex;
  align-items: center;
  background-color: ${colors.form_bg};
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #393C49;
  width: 220px;
`
const InputIcon = styled.img`
  margin-right: 8px;
`
const InputText = styled.input`
  border: none;
  background-color: ${colors.form_bg};
  color: ${colors.light};
  width: 100%;
  padding: 5px;

  &:focus {
        outline: none;
    }
`
