import { styled } from "styled-components";

export const ExperienceContainer = styled.div`
  background-color: white;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 20px; 
  margin-bottom: 48px;
`;

export const SecundaryAventura = styled.div`
  display:flex;
  flex-direction: rows;
  margin-top: 20px;

  @media(max-width: 1105px){ 
    flex-direction: column;
  }
`;

export const BlocoAventura = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextAventura = styled.div`
  display: flex;
  flex-direction: column;
  gap:30px;
  margin-top: 21px;
  margin-right: 21px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;

  @media(max-width: 1100px){
    text-align: justify;
  } 
`;

export const Image = styled.img`
  maxWidth: 100%;
  marginTop: 4rem;
`;
