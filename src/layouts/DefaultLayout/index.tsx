import { Outlet } from "react-router-dom";
// Components
import { Header } from "../../components/Header";
import * as S from "./styles";

export function DefaultLayout() {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  );
}
