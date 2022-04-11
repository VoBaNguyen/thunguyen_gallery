import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import ThemeToggleButton from './ThemeToggleButton'

const NavBar = ({ maxW, ...props }) => {
  return (
    <Box
      position="fixed"
      padding="8px 5px"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur 10px' }}
      zIndex={1}
    >
      <Container
        display="flex"
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        maxW={maxW}
      >
        <Logo />
        <NavLinks />
        <ThemeToggleButton />
      </Container>
    </Box>
  )
}

export default NavBar
