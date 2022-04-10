import { Container } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound({ title }) {
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <Container>
      <p>Click to route to "/oops" which isn't a registered route:</p>
      <Link to="/">Let's go - {title}</Link>
    </Container>
  )
}
