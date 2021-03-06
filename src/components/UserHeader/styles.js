import styled from 'styled-components';
export const HeaderContainer = styled.div`
    color: black;
    display: flex;
   
    justify-content: space-between;
    @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
    }

`;

export const Header = styled.div`
    display: flex;
    
    @media (max-width: 640px) {
    flex-direction: column;
    }
`;

export const Image = styled.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;
`;

export const ViewResumeLink = styled.a`
    
    display: flex;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    align-items: center;
    margin-top: 1rem;
    border: 2px solid #2644EC;
    border-radius: 10px;
    background-color: rgba(38, 68, 236, 0.3);
    transition: background-color 250ms ease;
    
    &:hover {
        background-color: #2644EC;
    }
    svg {
        fill: white;
        margin-left: 8px;
    }

`;


export const NameHeader = styled.h2`
    font: 40 px Arial, sans-serif;
    font-weight: bold;
`;