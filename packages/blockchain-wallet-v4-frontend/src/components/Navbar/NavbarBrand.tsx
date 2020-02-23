import media from 'services/ResponsiveService'
import React from 'react'
import styled from 'styled-components'

const BaseBrand = styled.div`
  display: flex;
  padding-left: 28px;
  align-items: center;
  > span {
    cursor: pointer;
    &:first-child {
      display: none;
    }
  }
  ${media.tablet`
    padding-left: 15px;
    > span:first-child {
      display: flex;
    }
  `}
`

const NavbarBrand = props => {
  const { children, ...rest } = props

  return <BaseBrand {...rest}>{children}</BaseBrand>
}

export default NavbarBrand