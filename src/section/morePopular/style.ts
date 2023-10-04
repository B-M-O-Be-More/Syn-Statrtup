import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 20px; 
  margin-bottom: 48px;
`;

export const SliderContainer = styled.div`
  padding-bottom: 3rem;
`;

export const MarginInterna = styled.div`
margin-top: 2rem;
`;

export const CarouselItemContainer = styled.div`
  display: inline-block;
  position: relative;
  
  & img {
    width: 347px;
    height: 291px;
  }

  @media(max-width: 768px){
    & img {
    width: 392px;
    height: 329px;
  }
  }
`;

export const ContainerTitle = styled.div`
  position: absolute;
  bottom: 20px;
  left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 315px;
  color: #FFFFFF;
  @media(max-width: 768px){
    width: 92%;
  }
  
`;

export const TitleEnd = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
`;

export const TitleEndereco = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.015em;
  text-align: left;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Star = styled.div`
  display: flex;
  align-items: bottom;
`;
export const Descricao = styled.div`
  display: flex;
  width: 40rem;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  padding-left: 2.25rem;
  padding-right: 2.25rem;

  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.015rem;

  @media(max-width: 768px){
   font-size: 0.8rem;
   width: 29rem;
   text-align: justify;
   margin: 1rem;
  }
`;

export const Box = styled.p`
  display: flex;
  justify-content: rows;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 768px){
    flex-direction: column;
  }
`;
export const Box1 = styled.p`
  display: flex;
  justify-content: rows;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 768px){
    display: none;
  
  }
`;