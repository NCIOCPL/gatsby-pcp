import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import ChildLinkComponent from './ChildLink'

export const NavWrapper = styled.nav`/* Some nav styles */`
export const NavList = styled.ul`/* Some list styles */`
export const NavListItem = styled.li`/* Some list item styles */`

const baseLinkStyles = css`
  text-decoration: none;
`

export const ChildLink = styled(ChildLinkComponent)`
  ${baseLinkStyles}
`

export const NavListLink = styled(Link)`
  ${baseLinkStyles}
`
