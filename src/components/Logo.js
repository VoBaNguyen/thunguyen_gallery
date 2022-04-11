import { Box, Image, useColorModeValue } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <Box as="div" display="flex" alignItems="center" justifyContent="center">
        <Image
          src="/images/logo.jpg"
          width="50px"
          height="50px"
          objectFit="cover"
          borderRadius="50%"
        />
        <Text
          as="h3"
          ml={3}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          // fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
        >
          ThuNguyen Galleries
        </Text>
      </Box>
    </Link>
  )
}

export default Logo
