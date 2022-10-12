import Link from "next/link";
import * as S from "./styles";

//hooks
import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("common");

  return (
    <S.Container>
      <S.LinksContainer>
        <Link href={""}>
          <S.Link>{t("home")}</S.Link>
        </Link>

        <Link href={""}>
          <S.Link>{t("about")}</S.Link>
        </Link>

        <Link href={""}>
          <S.Link>{t("tech_stack")}</S.Link>
        </Link>

        <Link href={""}>
          <S.Link>{t("projects")}</S.Link>
        </Link>

        <Link href={""}>
          <S.Link>{t("contact")}</S.Link>
        </Link>
      </S.LinksContainer>
    </S.Container>
  );
}

export { Header };
