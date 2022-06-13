import React from 'react'
import { User, Code, Portfolio, Education } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/portfolio_app1">
          <NavButton
            hasIconOnly
            renderIcon={User}
            iconDescription="Me"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="portfolio_app1/projects">
          <NavButton
            hasIconOnly
            renderIcon={Code}
            iconDescription="Projects"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="portfolio_app1/work">
          <NavButton
            hasIconOnly
            renderIcon={Portfolio}
            iconDescription="Work"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="portfolio_app1/education">
          <NavButton
            hasIconOnly
            renderIcon={Education}
            iconDescription="Education"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="portfolio_app1/awards">
          <NavButton
            hasIconOnly
            renderIcon={User}
            iconDescription="Awards"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav;