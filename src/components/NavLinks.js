import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import NavItem from './NavItem'

export default function NavLinks(props) {
  const { pathname } = useLocation()

  return (
    <Box as="div">
      <Stack direction={['column', 'row']} spacing="24px">
        <NavItem href="/" pathname={pathname}>
          Home
        </NavItem>
        <NavItem href="/graduate" pathname={pathname}>
          Graduate
        </NavItem>
        <NavItem href="/with-svi" pathname={pathname}>
          Savarti
        </NavItem>
        <NavItem href="/dalat" pathname={pathname}>
          Da Lat
        </NavItem>
        <NavItem href="/unreleased" pathname={pathname}>
          Unrevealed
        </NavItem>
      </Stack>
    </Box>
  )
}
