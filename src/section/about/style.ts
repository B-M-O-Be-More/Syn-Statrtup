import styled from 'styled-components'

export const AboutContainer = styled.div`
   
background-color: white;
background-size: cover;
background-position: center;
display: flex;
align-items: center;
padding: 20px; 
margin-bottom: 48px;
overflow-y: hidden;
`;

export const ContainerAbout = styled.div`
  width: 100%;
  display: flex;
  height: 100%;

  @media(max-width: 768px){
    flex-direction: column;
    margin-top: 20px;
  }
  
`;
export const ContainerPhoto = styled.div`
  width: 50%;
  display: flex;
  position: relative;
  align-items: center;

 

 @media (max-width: 768px) { 
  width: 100%;
  position: static;
  flex-wrap: wrap;
  justify-content: center;
    }
`;
export const ContainerText = styled.div`
 width: 50%;

 @media (max-width: 768px) { 
         width: 100%;
    }
`;

export const Image1 = styled.img`
  display: flex;
  width: 18rem;
  height: 11rem;
  transform: rotate(-8.128deg);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 768px) { 
    position: static; 
    width: 14rem;
    height: 9rem;
  }
`;

export const Image2 = styled.img`
  display: flex;
  width: 15rem;
  height: 15rem;
  transform: rotate(8.448deg);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 20px;
  z-index: 3;
  @media (max-width: 768px) { 
    position: static; 
    width: 11rem;
    height: 11rem;
  }
`;

export const Image3 = styled.img`
display: flex;
width: 21rem;
//height: 30rem;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
right: 0;

@media (max-width: 768px) { 
    position: static; 
    width: 10rem;
    
  }
`;

export const Descriçao = styled.div`
    //width: 30rem;
    height: 100%;
    margin: 1.5rem 1.8rem 0 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & p{
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.015rem;
    }

    @media (max-width: 768px) {
      & p{
        text-align: justify;
      }
    }
`;


