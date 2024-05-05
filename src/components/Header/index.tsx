import * as S from "./styles";
// Logo and Icons
import logoIgnite from "../../assets/logo-ignite.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";
// Constants
import { Constants } from "../../Constants";

export const Header = () => (
  <S.HeaderContainer>
    <img src={logoIgnite} alt="" />
    <nav>
      <NavLink to={Constants.URLS.HOME} title="Timer">
        <Timer size={24} />
      </NavLink>
      <NavLink to={Constants.URLS.HISTORY} title="Histórico">
        <Scroll size={24} />
      </NavLink>
    </nav>
  </S.HeaderContainer>
);
