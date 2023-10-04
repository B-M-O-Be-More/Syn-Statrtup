
import { GiCupcake } from 'react-icons/gi';
import gastronomia from '../../assets/experience/gastronomia.png'

import { Star, CarouselItemContainer, ContainerTitle, Title, TitleEnd, TitleEndereco, SliderContainer, Descricao, Box, Container, Box1, MarginInterna } from './style';

import { Limit } from '../../components/limit';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { TitlePage } from '../../components/titlepage';
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';


const carouselData = [
    {
        id: 1,
        imageSrc: gastronomia,
        title: "Produção de geleia artesanal",
        iconFavorite: <GiCupcake />,
        iconStar: <GiCupcake />,
        numberStar: 4.7,
        descrição: 'Venha aprender a fazer geleias artesanais deliciosas e saudáveis ​​em uma experiência única e divertida. Neste workshop, você terá a oportunidade de aprender com um chef experiente e apaixonado por culinária, que irá ensiná-lo a fazer geleias com frutas frescas e ingredientes naturais.',
        Endereco: "Russas - CE",

    },
    {
        id: 2,
        imageSrc: gastronomia,
        title: "Degustação de vinhos",
        iconFavorite: <GiCupcake />,
        iconStar: <GiCupcake />,
        numberStar: 4.8,
        descrição: 'Descubra os segredos do mundo do vinho em uma experiência de degustação única e envolvente. Aprenda sobre as diferentes variedades de uvas, técnicas de produção e processos de envelhecimento enquanto degusta vinhos finos selecionados a dedo por nossos especialistas.',
        Endereco: "São Paulo - SP",
    },
    {
        id: 3,
        imageSrc: gastronomia,
        title: "Passeios de balão",
        iconFavorite: <GiCupcake />,
        iconStar: <GiCupcake />,
        numberStar: 4.8,
        descrição: 'Descubra uma nova perspectiva do mundo enquanto flutua suavemente no ar em um passeio de balão inesquecível. Admire as vistas deslumbrantes de paisagens impressionantes e sinta a brisa suave enquanto flutua suavemente pelo céu.',
        Endereco: "Boituva - SP",
    },
    {
        id: 4,
        imageSrc: gastronomia,
        title: "Produção de geleia artesanal",
        iconFavorite: <GiCupcake />,
        iconStar: <GiCupcake />,
        numberStar: 4.7,
        descrição: 'Venha aprender a fazer geleias artesanais deliciosas e saudáveis ​​em uma experiência única e divertida. Neste workshop, você terá a oportunidade de aprender com um chef experiente e apaixonado por culinária, que irá ensiná-lo a fazer geleias com frutas frescas e ingredientes naturais.',
        Endereco: "Russas - CE",

    },
    {
        id: 5,
        imageSrc: gastronomia,
        title: "Degustação de vinhos",
        iconFavorite: <GiCupcake />,
        iconStar: <GiCupcake />,
        numberStar: 4.8,
        descrição: 'Descubra os segredos do mundo do vinho em uma experiência de degustação única e envolvente. Aprenda sobre as diferentes variedades de uvas, técnicas de produção e processos de envelhecimento enquanto degusta vinhos finos selecionados a dedo por nossos especialistas.',
        Endereco: "São Paulo - SP",
    },
    {
        id: 6,
        imageSrc: gastronomia,
        title: "Passeios de balão",
        iconFavorite: <GiCupcake />,
        iconStar: <GiCupcake />,
        numberStar: 4.8,
        descrição: 'Descubra uma nova perspectiva do mundo enquanto flutua suavemente no ar em um passeio de balão inesquecível. Admire as vistas deslumbrantes de paisagens impressionantes e sinta a brisa suave enquanto flutua suavemente pelo céu.',
        Endereco: "Boituva - SP",
    },



];


export const MorePopular: React.FC = () => {
    interface CustomPrevArrowProps {
        onClick: () => void;
    }

    const CustomPrevArrow = (props: CustomPrevArrowProps) => {
        return (
            <div onClick={props.onClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BsChevronCompactUp size='70px' />
            </div>
        )
    }

    const CustomNextArrow = (props: CustomPrevArrowProps) => {
        return (
            <div onClick={props.onClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BsChevronCompactDown size='70px' />
            </div>
        )
    }

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        prevArrow: <CustomPrevArrow onClick={() => CustomPrevArrow}/>,
        nextArrow: <CustomNextArrow onClick={() => CustomNextArrow}/>,
    };


    return (

        <Container>
            <Limit>
                <TitlePage title="Mais Populares" width='23%' position="right" textAlign="right" />

                <MarginInterna>
                    <Slider {...settings}>
                        {carouselData.map((item) => (
                            <SliderContainer key={item.id}>
                                <Box>
                                    <CarouselItemContainer>
                                        <img src={item.imageSrc} alt={item.title} />
                                        <ContainerTitle>
                                            <TitleEnd>
                                                <Title>{item.title}</Title>
                                                <TitleEndereco>{item.Endereco}</TitleEndereco>
                                            </TitleEnd>

                                            <Star>
                                                <p>
                                                    {item.numberStar}
                                                </p>
                                                <AiOutlineStar />
                                                <AiFillStar />
                                            </Star>
                                        </ContainerTitle>
                                    </CarouselItemContainer>

                                    <Descricao>
                                        {item.descrição}
                                    </Descricao>

                                </Box>

                                <Box1>
                                    <Descricao>
                                        {item.descrição}
                                    </Descricao>
                                    <CarouselItemContainer>

                                        <img src={item.imageSrc} alt={item.title} />
                                        <ContainerTitle>
                                            <TitleEnd>
                                                <Title>{item.title}</Title>
                                                <TitleEndereco>{item.Endereco}</TitleEndereco>
                                            </TitleEnd>

                                            <Star>
                                                <p>
                                                    {item.numberStar}
                                                </p>
                                                <AiOutlineStar />
                                                <AiFillStar />
                                            </Star>
                                        </ContainerTitle>
                                    </CarouselItemContainer>
                                </Box1>

                                <Box>
                                    <CarouselItemContainer>

                                        <img src={item.imageSrc} alt={item.title} />
                                        <ContainerTitle>
                                            <TitleEnd>
                                                <Title>{item.title}</Title>
                                                <TitleEndereco>{item.Endereco}</TitleEndereco>
                                            </TitleEnd>

                                            <Star>
                                                <p>
                                                    {item.numberStar}
                                                </p>
                                                <AiOutlineStar />
                                                <AiFillStar />
                                            </Star>

                                        </ContainerTitle>

                                    </CarouselItemContainer>

                                    <Descricao>
                                        {item.descrição}
                                    </Descricao>
                                </Box>
                            </SliderContainer>
                        ))}
                    </Slider>
                </MarginInterna>
            </Limit>
        </Container>
    );
};
