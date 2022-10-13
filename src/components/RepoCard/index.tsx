import * as S from "./styles";

import { IProject } from "../../interfaces/projects";
import { memo, useMemo } from "react";
import Image from "next/image";

interface IRepoCard {
  cardData: IProject;
}

function RepoCard({ cardData }: IRepoCard) {
  const { name, description } = cardData;

  const imageName = useMemo(() => {
    const images = [
      "placeholder_01.png",
      "placeholder_02.png",
      "placeholder_03.png",
      "placeholder_04.png",
      "placeholder_05.png",
      "placeholder_06.png",
    ];

    return images[Math.floor(Math.random() * images.length)];
  }, []);


  function placeholder(){
    alert('still in development')
  }

  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={`/images/${imageName}`} layout={"fill"} alt="" />
      </S.ImageContainer>

      <S.Content>
        <S.Title>{name}</S.Title>

        <S.DescriptionContainer>
          <S.Description>
            {description}
            {description}
            {description}
          </S.Description>
        </S.DescriptionContainer>

        <S.Links>
          <div onClick={placeholder}>
            <S.LinkIcon>
              <Image src="/icons/chain.svg" layout="fill" alt="" />
            </S.LinkIcon>
            <S.LinkName>Live Preview</S.LinkName>
          </div>
          <div onClick={placeholder}>
            <S.LinkIcon>
              <Image src="/icons/github.svg" layout="fill" alt="" />
            </S.LinkIcon>
            <S.LinkName>View Code</S.LinkName>
          </div>
        </S.Links>
      </S.Content>
    </S.Container>
  );
}

export default memo(RepoCard);
