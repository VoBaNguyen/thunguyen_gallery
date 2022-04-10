// import { Link } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import ChakraLink from './ChakraLink'

export default function NavItem({ children, href, pathname }) {
  const active = pathname === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <Link to={href}>
      <ChakraLink
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </ChakraLink>
    </Link>
  )
}
