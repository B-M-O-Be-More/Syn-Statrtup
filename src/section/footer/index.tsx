import { Limit } from "../../components/limit"
import { ContainerFooter, End, FooterColum, Infor, Image, Line, DivRedonda, Infor1 } from "./style"
import logo from '../../assets/header/logobranca.png'


export const Footer = () => {
    return (
        <ContainerFooter>
            <Limit>
                <FooterColum>
                    <Infor>
                        <a href="#">Ajuda</a>
                        <a href="#">Contato</a>
                        <a href="#"><Image src={logo} /></a>
                        <a href="#">Comunidade</a>
                        <a href="#">Blog</a>
                    </Infor>
                    <Line />
                    <End>
                        <Infor1>
                            <DivRedonda></DivRedonda>
                            <DivRedonda></DivRedonda>
                            <DivRedonda></DivRedonda>
                            <DivRedonda></DivRedonda>
                        </Infor1>
                        <p>© 2023 NomeEmpresa. Todos os direitos reservados.</p>
                    </End>
                </FooterColum>
            </Limit>
        </ContainerFooter>
    )
}