import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Fonts from '../Fonts'
import NavBar from '../Navbar'

export default function Layout({ children, maxW }) {
  return (
    <>
      <Box as="main" pb={8} display="flex" justifyContent="center">
        <Fonts />
        <NavBar maxW="container.xl" />
        <Container maxW={maxW} pt={20} height>
          {children}
        </Container>
      </Box>
    </>
  )
}
