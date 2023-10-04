import styled from 'styled-components';

export const Container = styled.div`
display: flex;


align-items: center;
justify-content:center;
gap:32px;
margin-top:20px;
margin-bottom:20px;

@media(max-width: 500px){
   flex-direction: column;
   align-items: center;
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
width: 85%;
font-size: 20px;
font-weight: 600;
line-height: 30px;
letter-spacing: -0.015em;
text-align: left;
color: #FF7100;
`;



export const IconTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Seta = styled.div`
 
  display: flex;
  align-items: center;
`;
export const CarouselItemContainer = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
`;

export const Image = styled.img`
background: linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: column;
  gap: 15px;
  


  opacity: 0;
  transition: opacity 0.3s;
  padding: 16px;
  &:hover {
    opacity: 1;
  }
`;


export const Title = styled.div`
 background: transparent;
  border: 0;
font-size: 20px;
font-weight: 600;
line-height: 30px;
letter-spacing: -0.015em;
text-align: left;
color: #FF7100;
  

`;

export const Description = styled.div`
font-size: 12px;
font-weight: 300;
line-height: 18px;
letter-spacing: -0.015em;
text-align: left;
text-align: justify;
`;

export const Icon = styled.span`
background-color: #FF7100;
    width:30px;
    height: 30px;
    display:flex;
    align-items:center;
    justify-content: center;
  color: #000;
  border-radius: 4px;
  margin-right: 5px;
`;


export const LearnMoreLink = styled.a`
  
margin-top: auto;
text-align: center;
  text-decoration: underline;
`;

