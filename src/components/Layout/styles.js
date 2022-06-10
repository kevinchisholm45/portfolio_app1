import styled from 'styled-components'
import { Content } from 'carbon-components-react'

export const StyledContent = styled(Content)`
  color: black;
  min-height: 100vh;
  background-color: #fafffd;
  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`