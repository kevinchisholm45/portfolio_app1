import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import { Button }from 'carbon-components-react/lib/components/Button';
import { Button } from 'carbon-components-react'
export const Container = styled.div`
    display: none;
    @media (max-width: 640px) {
    display: block;
    }
    background-color: #6c81f2;
`;

export const Spacer = styled.div`
    height: 48px;   
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1;
    
    
`;

export const NavLink = styled(Link)`
    width: 25%;
`;

export const NavButton = styled(Button)`
    width: 100%;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
`;

export const NameHeader = styled.h2`
    font: 40 px Arial, sans-serif;
    text-align: center;
    font-weight: bold;
    margin: 10px;
    text-shadow: 1px 1px 1px #000000;
`;

