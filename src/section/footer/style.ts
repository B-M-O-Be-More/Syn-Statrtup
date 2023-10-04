import { styled } from "styled-components";

export const ContainerFooter = styled.div`
  background-color: #FF7100;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 20px;
  color: white;
  width: 100%;
  overflow-x: hidden;

`;

export const FooterColum = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
`;
export const Infor = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white; 
    padding: 10px;
    gap: 1rem;

    & a {
            color: #fff; 
            text-decoration: none; 
        }

    & a:hover {
            text-decoration: underline; 
            color: black;
        }
    
        @media (max-width: 500px) { 
        flex-direction: column;
    }
`;


export const Infor1 = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white; 
    padding: 10px;
    gap: 1rem;

    & a {
            color: #fff; 
            text-decoration: none; 
        }

    & a:hover {
            text-decoration: underline; 
            color: black;
        }
    }
`;


export const End = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 4rem;
    text-align: center;
`;

export const Image = styled.img`
    width: 10rem;
    @media (max-width: 500px) { 
        width: 8rem;
    }
`;

export const Line = styled.div`

    &::before {
        content: "";
        position: absolute;
        width: 75%;
        height: 4px;
        background-color: white;
        left: 0; right: 0; margin: auto;  
    }
    @media(max-width: 768px){
        &::before {
            content: "";
            position: absolute;
            width: 90%;
            height: 4px;
            background-color: white;
            left: 0; right: 0; margin: auto;  
        }
   }
`;

export const DivRedonda = styled.div`
    width: 60px; 
    height: 60px; 
    background-color: #D9D9D9; 
    border-radius: 50%; 
    @media (max-width: 500px) { 
    flex-direction: column;
    width: 50px; 
    height: 50px; 
    }
`;