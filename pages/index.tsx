import type { GetStaticProps, NextPage } from "next";
import * as S from "../src/styles";

//hooks
import { useTranslations } from "next-intl";

//components
import Image from "next/image";

//types
interface IPageProps {
  techIcons: {
    icon: string;
    alt: string;
  }[];
}

//this function is necessary to get the translations in every single page
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const techIcons = [
    {
      icon: "/icons/css.svg",
      alt: "css",
    },
    {
      icon: "/icons/git.svg",
      alt: "git",
    },
    {
      icon: "/icons/github.svg",
      alt: "github",
    },
    {
      icon: "/icons/html.svg",
      alt: "html",
    },
    {
      icon: "/icons/js.svg",
      alt: "javascript",
    },
    {
      icon: "/icons/react.svg",
      alt: "react",
    },
    {
      icon: "/icons/redux.svg",
      alt: "redux",
    },
    {
      icon: "/icons/sass.svg",
      alt: "sass",
    },

    {
      icon: "/icons/tailwind.svg",
      alt: "tailwind",
    },

    {
      icon: "/icons/vscode.svg",
      alt: "vscode",
    },
  ];

  return {
    props: {
      messages: (await import(`../public/locales/${locale}.json`)).default,
      techIcons,
    },
  };
};

const Home: NextPage<IPageProps> = ({ techIcons }) => {
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

      <S.TechContainer>
        <S.SectionTitle>{t("tech_title")}</S.SectionTitle>

        <S.SectionSubTitle>{t("tech_subtitle")}</S.SectionSubTitle>

        <S.TechIconsContainer>
          {techIcons.map(({ icon, alt }) => (
            <S.TechIcons key={alt}>
              <Image src={icon} alt={alt} layout={"fill"} />
            </S.TechIcons>
          ))}
        </S.TechIconsContainer>
      </S.TechContainer>

      
    </S.Container>
  );
};

export default Home;
