import { Image } from '@chakra-ui/react'

export default function ImageGridImage({ src, onClick }) {
  return (
    <Image
      padding="2px"
      src={src}
      height="100%"
      objectFit="cover"
      objectPosition="center center"
      alt="Grid Image"
      cursor="pointer"
      onClick={onClick}
    />
  )
}
