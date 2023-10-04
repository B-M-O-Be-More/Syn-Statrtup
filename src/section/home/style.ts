import styled from "styled-components";
import background_fundo from '../../assets/home/background.png'

export const HomeContainer = styled.div`
  background-image: url(${background_fundo});
  background-size: cover;
  background-position: center;
  height: 100vh; /* Ajuste a altura conforme necessário */
  display: flex;
  align-items: center;
  padding: 20px; /* Espaçamento interno */

`;

export const Hometext = styled.div`
    display:flex;

    flex-direction: column;
    justify-content:center;
    margin-top: auto;
    margin-bottom: auto;
    gap: 36px;
    color: white;
    max-width: 600px;

    h1 {
        font-size: 54px;
        font-weight: 500;
        line-height: 81px;
        letter-spacing: -0.015em;
        text-align: left;

        @media(max-width: 768px){
            font-size: 44px;
            text-align: center;
        }
    }
    p {
    max-width: 450px;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: -0.015em;
    text-align: left;

    @media(max-width: 768px){
        font-size: 20px;
        text-align: center;
    }
    }

`;