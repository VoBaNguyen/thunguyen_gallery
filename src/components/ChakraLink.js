import { Link } from '@chakra-ui/react'
import React from 'react'

export default function ChakraLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>
}
