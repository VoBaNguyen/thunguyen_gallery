import { Box, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

function SlickImage({ id }) {
  return (
    <Image
      padding="0 5px 5px 5px"
      borderRadius="10px"
      src={`/images/graduate/graduate_${id}.jpg`}
      height="100%"
      objectFit="cover"
      objectPosition="center center"
      alt="Graduate Image"
      cursor="pointer"
    />
  )
}

export default function Savarti({ chilren, title }) {
  const [listImageIds, setImageIds] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
  ])
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <Box
      height="80vh"
      overflow="hidden"
      borderRadius="0.5rem"
      position="relative"
    >
      <Slider dots={true}>
        {listImageIds.map(id => (
          <SlickImage id={id} key={id} />
        ))}
      </Slider>
    </Box>
  )
}
