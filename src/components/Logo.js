import { Box, Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <Box as="div" display="flex" alignItems="center" justifyContent="center">
        <Image
          src="/images/logo.jpg"
          width="60px"
          height="60px"
          objectFit="cover"
          borderRadius="50%"
        />
        <Text as="h3" fontWeight="500" ml={3}>
          ThuNguyen Galleries
        </Text>
      </Box>
    </Link>
  )
}

export default Logo
