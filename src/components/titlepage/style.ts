import styled from 'styled-components';

export interface iLineProps {
    width?: string;
    position?: 'left' | 'center' | 'right';
    textAlign?: 'left' | 'center' | 'right';
}

export interface ititleProps {
    textAlign?: 'left' | 'center' | 'right';
}

export const Line = styled.div<iLineProps>`
   

    &::before {
      content: "";
      position: absolute;
      width: ${props => props.width || '30%'};
      height: 4px;
      background-color: #FF7100;
      
      ${props => {
        switch (props.position) {
          case 'left':
            return 'left: -20px;';
          case 'center':
            return 'left: 0; right: 0; margin: auto;';
          case 'right':
            return 'right: 0;';
          default:
            return 'left: 0;';
        }
      }}
    }
`;

export const TitlePage_ = styled.h1<ititleProps>`
margin-top: 4rem;
height: 60px;


      font-size: 40px;
      font-weight: 700;
      line-height: 72px;
      letter-spacing: -0.015em;
      text-align: ${props => props.textAlign};
  
      @media (max-width: 768px) {
        font-size: 30px;
        text-align: center;
      }
   
  };
`;