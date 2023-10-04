import styled from 'styled-components';


export const ContainerDepoimento = styled.div`
 background: #FFF1F1;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 20px; 
  margin-bottom: 48px

`;

export const LayoutDepoimento = styled.div`

    width: 33.125rem;
    height: 17.5625rem; 
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 8px;
    border-color: white;
    background-color: #F8F8FA;
    margin-top: 6.5rem;
    padding-left: 1.5rem;
    padding-top: 1.38rem;
    padding-right: 1.5rem;

    @media(max-width:768px){
        width: 20.125rem;
        height: 100%;
    }
`;

export const CardDepoimento = styled.div`
    
display: flex;
align-items: center;
justify-content: center;

`;

export const Title = styled.div`
    position: absolute;
    bottom: 16px;
    left: 16px;
    

    & p{
        color: #FFF;
        font-family:
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
letter-spacing: -0.015rem;  
    }
`;

export const Title1 = styled.div`
   
    & p{
        color: #FFF;
        font-family:
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
letter-spacing: -0.015rem;  
    }
`;
export const Cidade = styled.p`
    margin-top: 0.25rem;
    color: #FFF;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.01125rem;
`;


export const Descricao = styled.p`
    color: #000;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.015rem;
`;

export const DateUser = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DateUserRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1rem;
`;


export const IconUser = styled.image`

`;


export const Dates = styled.image`
    display: flex;
width: 12rem;
height: 1.25rem;
flex-direction: column;
justify-content: center;

`;


export const ContainerAventura = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
     margin-top: 90px;
      margin-bottom: 90px;

`;
export const CarouselWrapper = styled.div`
   
    display: flex;
    flex-direction: rows;
    justify-content: center;
`;


export const CarouselContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
    gap: 20px;
    justify-content: center;
    align-items: center;

    @media(max-width: 1250px){
        grid-template-columns: 1fr 1fr 1fr;
       
    }
    @media(max-width: 850px){
        grid-template-columns: 1fr 1fr;
       
    }
    @media(max-width: 600px){
        grid-template-columns: 1fr ;
    }
`;

export const ItemPhotos = styled.div`
    position: relative;
    display: inline-block;

    & img { 
        width: 15.9375rem;
        height: 21.6875rem;

    }

    @media(max-width: 850px){
        & img { 
            width: 13rem;
            height: 17.6875rem;
    
        }
       
    }
`;

export const Button = styled.button`
    
margin-top: 3rem;
    border-radius: 0.5rem;
    background: #FF7100;
    display: flex;
padding: 1rem 2.5rem;
justify-content: center;
align-items: center;
color: #fff;
width: 10rem;
height: 3.5rem;

& p{
    color: #FFF;
text-align: center;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.015rem;
}
`;
