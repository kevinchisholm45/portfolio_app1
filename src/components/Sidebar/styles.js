import styled from 'styled-components'
import { SideNav } from 'carbon-components-react';

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`
export const SideLogo = styled.div`
  width: 200px; 
  img {
    max-width: 100%;
    height: 180px;
  }
  cursor: pointer;
`;