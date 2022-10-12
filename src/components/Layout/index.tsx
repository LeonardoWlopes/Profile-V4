import { ReactNode } from "react";
import * as S from "./styles";

//components
import { Header } from "../Header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
    </>
  );
}

export { Layout };
