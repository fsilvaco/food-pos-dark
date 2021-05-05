import styled from "styled-components"
import colors from "../../styles/colors"

export function Buttons(props) {
  const {title, fluid, active, ...rest} = props

  return (
    <Button 
      isActive={active}
      isFluid={fluid}
      {...rest}
    >
      {title}
    </Button>
    )
}

const Button = styled.button`
  background-color: ${props => props.isActive ? (`${colors.primary}`) : (`${colors.dark_bg_2}`) };
  padding: 6px 12px;
  border: none;
  border: 1px solid ${props => props.isActive ? (`${colors.primary}`) : (`${colors.dark_line}`)};
  margin-right: 8px;
  border-radius: 8px;
  color: ${props => props.isActive ? (`${colors.white}`) : (`${colors.primary}`)};
  font-size: 14px;

  ${props => props.isFluid && (`
    width: 100%;
    padding: 15px 0;
    margin-top: 10px;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.3);
  `)}


`