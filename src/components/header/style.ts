import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 72px;
  background-color: transparent;
  color: white;
  transition: transform 0.3s ease; 
  transform: translateY(0); 
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  &.hidden {
    transform: translateY(-100%);
  }
`;

export const HeaderNavMobile = styled.section`
  display: none;
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    gap:35px;
    margin-left: auto;
    background-color: #FF7100;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    }
`;


export const HeaderLinkMobile = styled.section`
  display: flex;
  align-items: center;
 
  &&:hover{
      background-color: #FF7100;
      color: #fff;
      text-decoration: underline;
  }
`;

export const Nav1 = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  width: 100%;
  
  ul {
  list-style: none;
  text-align: justify;
  & li {
    display: flex;
    margin-bottom: 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
    
  & li a {
    text-decoration: none;
    font-size:25px;
    color: #fff; 
  
    align-items: center;
  }
  & li:hover {
    
    
    a {
      color: #000; 
    }
  & li a.active {
    color: #000;
  }
  }
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100%;

    @media(max-width: 768px){
      width: 80%;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: auto;

  @media (max-width: 768px){
    display:none;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap:35px;

    & li {
      margin-right: 20px;
      gap: 35px;
    }
    & li a {
      text-decoration: none;
      color: #fff;
    }
    & li:hover {
      //border-bottom: 2px solid #FF7100;
       text-decoration: underline;
      a {
        color: #FF7100; 
        // text-decoration: underline;
        
      }
    }
  }

`;

export const ButtonMENU = styled.button`
display: none;
  background-color: transparent;
  color: white; 
  border: 0; 
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;}
  :hover {
      color: #FF7100;
    }
      
`;

export const ButtonMENU_ = styled.button`
display: none;
  background-color: transparent;
  color: white; 
  border: 0; 
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;}
  :hover {
      color: #000;
    }     
`;

export const HamburgerMenu = styled.div`
  display: none;
  color: black;

  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
     z-index: 1000;
  }
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;