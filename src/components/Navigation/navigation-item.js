import styled from "styled-components"
import colors from "../../styles/colors"

export function NavigationItem(props) {
    const { icon, active, ...rest } = props
    return (
        <Item
            checkIsActive={active}
            {...rest}
        >
            <Icon
                checkIsActive={active}
                src={icon}
            />
        </Item>
    )
}

const Item = styled.a`
    width: 56px;
    height: 56px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    ${props => props.checkIsActive && `
        background-color: ${colors.primary};
        box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);

        // &:after {
        //     content: "";
        //     width: 85%;
        //     height: 80px;
        //     position: absolute;
        //     right: 0px;
        //     z-index: 1;
        //     background-color: ${colors.dark_bg_1};
        //     border-radius: 12px 0 0 12px;
        // }

    `}

    
`

const Icon = styled.img`
    ${props => props.checkIsActive && `
        filter: brightness(0) invert(1);
    `}
`