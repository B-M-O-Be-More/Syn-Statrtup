import { GiCupcake } from 'react-icons/gi';
import gastronomia from '../../../assets/experience/gastronomia.png'
import aventura from '../../../assets/experience/aventura.png'
import bemestar from '../../../assets/experience/bemestar.png'
import artecultura from '../../../assets/experience/artecultura.png'

import { Overlay, Image, CarouselItemContainer, Title, Description, LearnMoreLink, ContainerTitle, Icon, Seta, IconTitle, Container } from './style';
import { AiOutlineRight } from 'react-icons/ai';


const carouselData = [
    {
        id: 1,
        imageSrc: gastronomia,
        title: "Gastronomia",
        icon: <GiCupcake />,
        description: "Escolha entre uma variedade de experiências culinárias que vão desde aulas práticas em cozinhas de restaurantes chiques até oficinas temáticas em locais selecionados, onde você pode aprender a fazer queijos artesanais, pães de fermentação natural, massas frescas e muito mais.",
        link: "https://exemplo.com/link-1",
    },
    {
        id: 2,
        imageSrc: aventura,
        title: "Aventura",
        icon: <GiCupcake />,
        description: "Descrição 1",
        link: "https://exemplo.com/link-1",
    },
    {
        id: 3,
        imageSrc: bemestar,
        title: "Bem-Estar",
        icon: <GiCupcake />,
        description: "Descrição 1",
        link: "https://exemplo.com/link-1",
    },
    {
        id: 4,
        imageSrc: artecultura,
        title: "Arte e cultura",
        icon: <GiCupcake />,
        description: "Descrição 1",
        link: "https://exemplo.com/link-1",
    }
    

];


export const ContainerImagens: React.FC = () => {
    
    return (
        <Container>
            {carouselData.map((item) => (
                <CarouselItemContainer key={item.id}>

                    <Image src={item.imageSrc} alt={item.title} />
                    <ContainerTitle>
                        <IconTitle>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                        </IconTitle>

                        <Seta>
                            <AiOutlineRight />
                        </Seta>

                    </ContainerTitle>

                    <Overlay>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <LearnMoreLink href={item.link} target="_blank" rel="noopener noreferrer">
                            <ContainerTitle>
                                <IconTitle>
                                    <Icon>{item.icon}</Icon>
                                  
                                </IconTitle>

                                <Seta>
                                <Title>Saiba mais</Title>
                                <AiOutlineRight />
                                </Seta>

                            </ContainerTitle>
                        </LearnMoreLink>
                    </Overlay>
                </CarouselItemContainer>
            ))}
          
        </Container>
       
    );
};
