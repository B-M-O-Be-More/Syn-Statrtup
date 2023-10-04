import { useState } from "react";
import { Limit } from "../limit";
import { ButtonMENU, ButtonMENU_, HeaderContainer, HeaderLinkMobile, HeaderNavMobile, Logo, Nav, Nav1, NavBar } from "./style";
import logo from '../../assets/header/logo.png'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            {
                isMenuOpen && (
                    <HeaderNavMobile>
                        <Nav1>
                            <ul>
                                <HeaderLinkMobile>
                                    <li><a href="#">Sobre nós</a></li>
                                </HeaderLinkMobile>

                                <HeaderLinkMobile>
                                    <li><a href="#">Entrar</a></li>
                                </HeaderLinkMobile>

                                <HeaderLinkMobile>
                                    <li><a href="#">Cadastrar</a></li>
                                </HeaderLinkMobile>
                            </ul>
                        </Nav1>
                        <ButtonMENU_ onClick={toggleMenu}>
                            <AiOutlineClose size='40px' />
                        </ButtonMENU_>
                    </HeaderNavMobile>
                )}
            <HeaderContainer>

                <Limit>
                    <NavBar>
                        <Logo>
                            <img src={logo} alt="Logoheader" />
                        </Logo>

                        <ButtonMENU  onClick={toggleMenu}>
                            <AiOutlineMenu size='30px' />
                        </ButtonMENU>

                        <Nav>
                            <ul>
                                <li><a href="#">Sobre nós</a></li>
                                <li><a href="#">Entrar</a></li>
                                <li><a href="#">Cadastrar</a></li>
                            </ul>
                        </Nav>
                    </NavBar>
                </Limit>
            </HeaderContainer >
        </>
    );

};
