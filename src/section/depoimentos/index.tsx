import { Limit } from "../../components/limit"
import { Button, CardDepoimento, CarouselContainer, CarouselWrapper, Cidade, ContainerAventura, ContainerDepoimento, DateUser, DateUserRow, Dates, Descricao, IconUser, ItemPhotos, LayoutDepoimento, Title, Title1 } from "./style"
import imagem from '../../assets/depoimento/Rectangle 8.png'

//import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


//import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { TitlePage } from "../../components/titlepage";
import { Star } from "../morePopular/style";
// import Slider from "react-slick";


export const Depoimentos: React.FC = () => {

    const carouselData = [
        {
            id: 1,
            title: "EXPERIÊNCIA GASTRONÔMICA",
            iconUser: <FaRegUserCircle />,
            iconStar: <AiFillStar />,
            numberStar: 4.7,
            descrição: 'Eu tive uma experiência incrível com a empresa! Eu nunca imaginei que pudesse aprender tanto sobre a arte da culinária em uma única noite. O chef nos guiou passo a passo na preparação de pratos deliciosos. Foi uma noite memorável, repleta de sabores e risadas, e eu mal posso esperar para experimentar mais experiências com a empresa!"',
            nameUser: 'Estadia na Praia',
            profissao: "Russas - CE",

        },
        {
            id: 2,
            title: "EXPERIÊNCIA GASTRONÔMICA",
            iconUser: <FaRegUserCircle />,
            iconStar: <AiFillStar />,
            numberStar: 4.7,
            descrição: 'Eu tive uma experiência incrível com a empresa! Eu nunca imaginei que pudesse aprender tanto sobre a arte da culinária em uma única noite. O chef nos guiou passo a passo na preparação de pratos deliciosos. Foi uma noite memorável, repleta de sabores e risadas, e eu mal posso esperar para experimentar mais experiências com a empresa!"',
            nameUser: 'Estadia na Praia',
            profissao: "Russas - CE",
        },
        {
            id: 3,
            title: "EXPERIÊNCIA GASTRONÔMICA",
            iconUser: <FaRegUserCircle />,
            iconStar: <AiFillStar />,
            numberStar: 4.7,
            descrição: 'Eu tive uma experiência incrível com a empresa! Eu nunca imaginei que pudesse aprender tanto sobre a arte da culinária em uma única noite. O chef nos guiou passo a passo na preparação de pratos deliciosos. Foi uma noite memorável, repleta de sabores e risadas, e eu mal posso esperar para experimentar mais experiências com a empresa!"',
            nameUser: 'Estadia na Praia',
            profissao: "Russas - CE",
        },
        {
            id: 4,
            title: "EXPERIÊNCIA GASTRONÔMICA",
            iconUser: <FaRegUserCircle />,
            iconStar: <AiFillStar />,
            numberStar: 4.7,
            descrição: 'Eu tive uma experiência incrível com a empresa! Eu nunca imaginei que pudesse aprender tanto sobre a arte da culinária em uma única noite. O chef nos guiou passo a passo na preparação de pratos deliciosos. Foi uma noite memorável, repleta de sabores e risadas, e eu mal posso esperar para experimentar mais experiências com a empresa!"',
            nameUser: 'Estadia na Praia',
            profissao: "Russas - CE",
        }
    ]

    const carouselPhoto = [
        {
            id: 1,
            nome: 'Estadia na Praia',
            cidade: "Russas - CE",
            imgSRC: imagem,

        },
        {
            id: 2,
            nome: 'Estadia na Praia',
            cidade: "Russas - CE",
            imgSRC: imagem,
        },
        {
            id: 3,
            nome: 'Estadia na Praia',
            cidade: "Russas - CE",
            imgSRC: imagem,
        },
        {
            id: 4,
            nome: 'Estadia na Praia',
            cidade: "Russas - CE",
            imgSRC: imagem,
        },
    ]
    // const settings = {
    //     infinite: true,
    //     centerMode: true, // Habilita o modo centralizado
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //    centerPadding: '150px',
    //     dots: true,
    //     responsive: [
    //         {
    //             breakpoint: 1376, // Quando a largura da tela for igual ou inferior a 768px
    //             settings: {
    //                centerPadding: '75px',
    //             },
    //         },
    //         {
    //             breakpoint: 1230, // Quando a largura da tela for igual ou inferior a 768px
    //             settings: {
    //                 slidesToShow: 2,
    //                centerPadding: '0',
    //             },
    //         },
    //         {
    //             breakpoint: 992, // Quando a largura da tela for igual ou inferior a 768px
    //             settings: {
    //                 centerPadding: '-100px',
    //             },
    //         },

    //         {
    //             breakpoint: 810, // Quando a largura da tela for igual ou inferior a 768px
    //             settings: {
    //                 centerPadding: '-170px',
    //             },
    //         },
    //         {
    //             breakpoint: 768, // Quando a largura da tela for igual ou inferior a 768px
    //             settings: {
    //                 slidesToShow: 1,
    //                 centerPadding: '15%',
    //             },
    //         },
    //         {
    //             breakpoint: 480, // Quando a largura da tela for igual ou inferior a 480px
    //             settings: {
    //                 slidesToShow: 1,
    //                 centerPadding: '9%',
    //             },
    //         },
    //     ],
    // };


    return (
        <ContainerDepoimento>
            <Limit>
                <TitlePage title="Depoimentos" width='30%' position="center" textAlign="center" />


                {/* <Slider {...settings}> */}
                {carouselData.map((item) => (
                    <CardDepoimento key={item.id}>
                        <LayoutDepoimento>
                            <Title1>
                                {item.title}
                            </Title1>

                            <Descricao>
                                {item.descrição}
                            </Descricao>

                            <DateUser>
                                <DateUserRow>
                                    <IconUser>
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="25" cy="25" r="23.5" stroke="black" stroke-width="3" />
                                            <circle cx="25" cy="15" r="6.5" stroke="black" stroke-width="3" />
                                            <path d="M33.925 32.1385C36.2719 35.4554 37.8212 39.832 37.9855 44.2274C35.8784 45.6891 34.6247 46.4689 33.0609 47.0239C31.3314 47.6376 29.159 47.9974 25.0052 48.489C24.7641 48.4589 24.53 48.4297 24.3027 48.4014C20.8017 47.9655 18.8988 47.7286 17.306 47.2508C15.8197 46.8049 14.5788 46.1375 12.5135 44.7237C12.6664 40.2885 14.1141 35.7784 16.3567 32.3418C18.7539 28.6684 21.8532 26.5 25 26.5C28.1939 26.5 31.4202 28.5982 33.925 32.1385Z" stroke="black" stroke-width="3" />
                                        </svg>
                                    </IconUser>
                                    <Dates>
                                        <p>
                                            {item.nameUser}
                                        </p>
                                        <p>
                                            {item.profissao}
                                        </p>

                                    </Dates>
                                </DateUserRow>
                                <Star>
                                    {item.numberStar}
                                    {item.iconStar}
                                </Star>
                            </DateUser>



                        </LayoutDepoimento>
                    </CardDepoimento>
                ))}
                {/* </Slider> */}


                <TitlePage title="Planeje sua próxima aventura" width='23%' position="left" textAlign="left" />

                <ContainerAventura>
                    <CarouselWrapper >
                        <CarouselContainer>
                            {carouselPhoto.slice(0, 4).map((item) => (
                                <ItemPhotos key={item.id}>

                                    <img src={item.imgSRC} alt={item.nome} />

                                    <Title>
                                        <p>
                                            {item.nome}</p>

                                        <Cidade>
                                            {item.cidade}
                                        </Cidade>

                                    </Title>

                                </ItemPhotos>
                            ))}

                        </CarouselContainer>
                    </CarouselWrapper>

                    <Button><p>Ver mais</p></Button>
                </ContainerAventura>
            </Limit>

        </ContainerDepoimento >
    )
}