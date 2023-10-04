
import { Limit } from "../../components/limit"
import { ExperienceContainer, TextAventura, SecundaryAventura, BlocoAventura, Image } from "./style"
import relogio from '../../assets/experience/relogio.png'
import { TitlePage } from "../../components/titlepage"
import { ContainerImagens } from "./carrocel"


export const Experience: React.FC = () => {

  return (


    <ExperienceContainer>

      <Limit>
        <>
          <TitlePage title="Experiências" position="left" textAlign="left" />

          <ContainerImagens />

          <SecundaryAventura>
            <BlocoAventura>
              <TitlePage title="Aventura Inesquecível" width="25%" position="left" textAlign="left" />

              <TextAventura>
                <p>
                  Bem-vindo(a) à nossa emocionante jornada de descoberta e aventura! Prepare-se para vivenciar momentos incríveis e criar memórias que durarão para sempre. Nossa e quipe dedicada está pronta para levá-lo(a) a uma experiência única, onde seus sonhos se tornam realidade.
                </p>
                <p>
                  Explore paisagens deslumbrantes, mergulhe em culturas fascinantes e desafie seus limites em atividades emocionantes. Seja voando de parapente sobre montanhas majestosas, mergulhando em recifes de coral coloridos ou explorando cidades antigas cheias de histórias, cada detalhe foi cuidadosamente planejado para proporcionar a você uma experiência verdadeiramente inesquecível.
                </p>
              </TextAventura>
            </BlocoAventura>
            <Image src={relogio} />
          </SecundaryAventura>
        </>
      </Limit>
    </ExperienceContainer>
  )
}