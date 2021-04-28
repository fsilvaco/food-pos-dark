import styled from "styled-components";
import colors from "../../styles/colors"

import { NavBarItem } from "./NavBarItem";

import Logo from "../../../public/logo.svg"
import Home from "../../../public/home.svg"
import Icon1 from "../../../public/icon_1.svg"
import Icon2 from "../../../public/icon_2.svg"
import Icon3 from "../../../public/icon_3.svg"
import Icon4 from "../../../public/icon_4.svg"
import Icon5 from "../../../public/icon_5.svg"
import Icon6 from "../../../public/icon_6.svg"

export function NavBar() {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <img src={Logo} />
        </LogoContainer>
        <NavBarContainer>
          <NavBarItem icon={Home} active />
          <NavBarItem icon={Icon1} active={false} />
          <NavBarItem icon={Icon2} active={false} />
          <NavBarItem icon={Icon3} active={false} />
          <NavBarItem icon={Icon4} active={false} />
          <NavBarItem icon={Icon5} active={false} />
        </NavBarContainer>
        <NavBarItem icon={Icon6} active={false} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    position: fixed;
    width: 74px;
    height: 100%;
    background-color: ${colors.dark_bg_2};
    padding: 0 30px;
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
    justify-content: space-around;
  `
  ;

const Logout = styled.div``;