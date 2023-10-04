import { styled } from "styled-components";


export const OurCompromiseContainer = styled.div`
    background: #E8E8E8;

  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 20px; 
  margin-bottom: 48px;
  overflow-x: hidden;
`;

export const ContainerCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    margin-top: 2.62rem; 

    @media (max-width: 768px) {
       flex-direction: column;
       text-align: justify;
    }
`;

export const Card = styled.div`
max-width: 21.6875rem;
    height: 26rem;
    position: relative;
    background: #D9D9D9;

    @media (max-width: 768px) {
        max-width: 100%; /* Em telas menores, ocupe toda a largura */
    }
`;

export const Descricao = styled.div`
position: absolute;
bottom: 0;
width: 100%;
height: 10.75rem;
flex-shrink: 0;
border: 1px solid #D9D9D9;
background: #FFF;
padding: 1rem;

& p{
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.015rem;
}
`;

export const Box = styled.div`
width: 21.6875rem;
height: 15.25rem;
Position: relative;

`;

export const TitleCompromisso = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;align-items: center;
    bottom: 1.12rem;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.01875rem;
`;
