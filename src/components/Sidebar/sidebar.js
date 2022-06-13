import React from "react";
import { Link, useLocation} from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react';
import { StyledSideNav, SideLogo } from "./styles";

const items = [
    { name: 'Me', path: '/portfolio_app1/'},
    { name: 'Projects', path: '/portfolio_app1/projects'},
    { name: 'Work', path: '/portfolio_app1/work'},
    { name: 'Education', path: '/portfolio_app1/education'},
    { name: 'Awards', path: '/portfolio_app1/awards'},
];

const Sidebar = () => {
    const location = useLocation();
    return ( 
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
            <SideLogo>
                <img src={require('../../photos/sideb1.png')} alt='logo'></img>
            </SideLogo>
            <SideNavItems>
                {items.map(i => (
                <SideNavLink
                    isActive={
                    location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
                    }
                    element={Link}
                    to={i.path}
                    key={i.name}
                >
                    {i.name}
                </SideNavLink>
                ))}
            </SideNavItems>
        </StyledSideNav>
    );
};

export default Sidebar;