import type { GetStaticProps, NextPage } from "next";
import * as S from "../src/styles";

//hooks
import { useTranslations } from "next-intl";

//components
import Head from "next/head";
import Image from "next/image";

//this function is necessary to get the translations in every single page
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../public/locales/${locale}.json`)).default,
    },
  };
};

const Home: NextPage = () => {
  const t = useTranslations("home");

  return (
    <S.Container>
      <S.IntroductionContainer>
        <S.IntroductionTexts>
          <S.Introductions>{t("message_01")}</S.Introductions>

          <S.Introductions>{t("message_02")}</S.Introductions>

          <S.MyName>{t("message_03")}</S.MyName>

          <S.Introductions>{t("message_04")}</S.Introductions>
        </S.IntroductionTexts>

        <S.ImageContainer>
          <S.ImageContainer>
            <S.ImageFrame>
              <S.Me
                src={"https://github.com/leonardoWlopes.png"}
                alt="Leonardo photo"
                width={350}
                height={350}
              />
            </S.ImageFrame>
          </S.ImageContainer>
        </S.ImageContainer>
      </S.IntroductionContainer>
    </S.Container>
  );
};

export default Home;
