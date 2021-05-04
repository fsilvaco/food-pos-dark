import styled from "styled-components";
import colors from "../styles/colors"

import { NavigationItem } from "../components/navigation/navigation-item";

import Logo from "../../public/logo.svg"
import Home from "../../public/home.svg"
import Icon1 from "../../public/icon_1.svg"
import Icon2 from "../../public/icon_2.svg"
import Icon3 from "../../public/icon_3.svg"
import Icon4 from "../../public/icon_4.svg"
import Icon5 from "../../public/icon_5.svg"
import Icon6 from "../../public/icon_6.svg"

export function NavigationLeft() {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <img src={Logo} />
        </LogoContainer>
        <NavBarContainer>
          <NavigationItem icon={Home} active />
          <NavigationItem icon={Icon1} active={false} />
          <NavigationItem icon={Icon2} active={false} />
          <NavigationItem icon={Icon3} active={false} />
          <NavigationItem icon={Icon4} active={false} />
          <NavigationItem icon={Icon5} active={false} />
        </NavBarContainer>
        <NavigationItem icon={Icon6} active={false} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 74px;
    height: 100%;
    background-color: ${colors.dark_bg_2};
    padding: 0 20px;
  `;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
  `;

const LogoContainer = styled.div`
    background-color: #543c3b;
    border-radius: 12px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const NavBarContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 60px 0;
  `
  ;