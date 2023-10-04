import { Limit } from "../../components/limit"
import { TitlePage } from "../../components/titlepage"
import { AboutContainer, ContainerAbout, ContainerPhoto, ContainerText, Descriçao, Image1, Image2, Image3 } from "./style"
import image2 from '../../assets/about/Small_box 1_1.png'
import image1 from '../../assets/about/background.png'
export const About = () => {
    return (
        <AboutContainer>
            <Limit>
            <TitlePage title="Sobre Nós" position="right" textAlign="right" />

                <ContainerAbout>
                    <ContainerPhoto>
                        <Image1 src={image1} />
                        <Image2 src={image1} />
                        <Image3 src={image2} />
                    </ContainerPhoto>

                    <ContainerText>
            
                        <Descriçao>
                            <p>
                                Nossa empresa é especializada em criar experiências únicas e memoráveis para nossos clientes. Oferecemos uma ampla variedade de experiências em diferentes áreas, como gastronomia, aventura, bem-estar, arte, cultura e aprendizado. Cada experiência é cuidadosamente criada com atenção aos detalhes e aos mais altos padrões de qualidade.
                            </p>
                            <p>
                                Trabalhamos com parceiros e anfitriões experientes e especializados em suas áreas de atuação, que estão sempre dispostos a compartilhar seu conhecimento e habilidades com os participantes. Acreditamos que as experiências são uma maneira única de escapar da rotina e conectar-se com o mundo ao nosso redor, e por isso nos esforçamos para criar experiências que oferecem uma fuga da realidade e a chance de explorar coisas novas e criar memórias inesquecíveis.
                            </p>
                            <p>
                                Nós somos uma empresa dedicada a proporcionar experiências incríveis para nossos clientes e estamos sempre em busca de maneiras de melhorar e expandir nossas ofertas. Venha nos acompanhar nesta jornada e experimente o melhor que a vida tem a oferecer!
                            </p>
                        </Descriçao>
                    </ContainerText>
                </ContainerAbout>

            </Limit>

        </AboutContainer>
    )
}