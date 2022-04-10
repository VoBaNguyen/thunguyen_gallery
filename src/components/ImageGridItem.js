import { Image } from '@chakra-ui/react'

export default function ImageGridImage({ id, onClick }) {
  return (
    <Image
      padding="2px"
      src={`/images/graduate/graduate_${id}.jpg`}
      height="100%"
      objectFit="cover"
      objectPosition="center center"
      alt="Graduate Image"
      cursor="pointer"
      onClick={onClick}
    />
  )
}
