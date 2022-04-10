import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'

export default function Home({ chilren, title }) {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <Box>
      Home page
      {chilren}
    </Box>
  )
}
