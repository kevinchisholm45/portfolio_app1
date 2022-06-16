import React from 'react'
import { User, Code, Portfolio, Education, Trophy } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, NavButton, NavLink, NameHeader } from './styles'

const MobileNav = ({ user }) => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        
        <NavLink to="/portfolio_app1/">
          <NavButton
            hasIconOnly
            renderIcon={User}
            iconDescription="Me"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/portfolio_app1/projects">
          <NavButton
            hasIconOnly
            renderIcon={Code}
            iconDescription="Projects"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/portfolio_app1/work">
          <NavButton
            hasIconOnly
            renderIcon={Portfolio}
            iconDescription="Work"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/portfolio_app1/education">
          <NavButton
            hasIconOnly
            renderIcon={Education}
            iconDescription="Education"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/portfolio_app1/awards">
          <NavButton
            hasIconOnly
            renderIcon={Trophy}
            iconDescription="Awards"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
      <NameHeader>{"Kevin Chisholm"}</NameHeader>
    </Container>
  )
}

export default MobileNav;