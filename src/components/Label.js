import styled from "styled-components"
import colors from "../styles/colors"

export function Label(props) {
  const {title, active} = props

  return (
    <ItemLabel 
      isActive={active}
    >
      {title}
    </ItemLabel>
    )
}

const ItemLabel = styled.button`
  background-color: ${props => props.isActive ? (`${colors.primary}`) : (`${colors.dark_bg_2}`) };
  padding: 6px 12px;
  border: none;
  border: 1px solid ${props => props.isActive ? (`${colors.primary}`) : (`${colors.dark_line}`)};
  margin-right: 8px;
  border-radius: 8px;
  color: ${props => props.isActive ? (`${colors.white}`) : (`${colors.primary}`)};
  font-size: 14px;

`