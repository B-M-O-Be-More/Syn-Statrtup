import styled from "styled-components";

export const CommonQuestionsContainer = styled.div`
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 20px; 
  margin-bottom: 48px;
  overflow-x: hidden;
`;


export const Subtitle = styled.p`
  color: #000;
  text-align: left;
  font-family: Kanit;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0225rem;
  padding: 2.37rem 2rem;
`;
export const Topicos = styled.div`
 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  @media(max-width: 768px){
    flex-direction: column;
  }
`;

export const TitleTopico = styled.div`
  color: #000;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.02625rem;

`;


export const Column = styled.div`
  dispaly: flex;
  flex-direction: column;
    
`;


export const Topico1 = styled.div`
  width: 33rem; 
  overflow-y: scroll;

  @media (max-width: 1200px) { 

    width: 28rem;
  }
  @media (max-width: 950px) { 

    width: 24rem;
  }
  @media (max-width: 768px) { 

    width: 100%;
  }
`;
export const Topico2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:30px;
`;
export const Topicopeguntas1 = styled.div`
  height: 13rem;
  width: 33rem; 
  overflow-y: scroll;

  @media (max-width: 1200px) { 

    width: 28rem;
  }
  @media (max-width: 950px) { 

    width: 24rem;
  }
  @media (max-width: 768px) { 

    width: 100%;
  }
`;
export const Topicopeguntas2 = styled.div`
  height: 13rem;
  width: 33rem; 
  overflow-y: scroll;

  @media (max-width: 1200px) { 

    width: 28rem;
  }
  @media (max-width: 950px) { 

    width: 24rem;
  }
  @media (max-width: 768px) { 

    width: 100%;
  }
`;




export const FAQContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const FAQItemContainer = styled.div`
  overflow: hidden;
`;

export const FAQQuestion = styled.div`
  padding: 16px;
  background: #D9D9D9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #FF7100;
  }
`;

interface iFaqAnsweProps {
  expanded: boolean;
}
export const FAQAnswer = styled.div<iFaqAnsweProps>`
  padding: 16px;
  display: ${(props: { expanded: boolean }) => (props.expanded ? 'block' : 'none')};
`;
