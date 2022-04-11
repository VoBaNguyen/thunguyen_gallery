import { Box, Image, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import ImageModal from '../components/ImageModal'
import LazyLoad from '../components/LazyLoad'

const DalatImage = ({ src, onClick }) => {
  return (
    <Box height="80vh" onClick={onClick} cursor="pointer">
      <Image src={src} height="100%" objectFit="contain" />
    </Box>
  )
}

export default function Dalat({ title }) {
  const ImageConfig = [
    { id: 1, colSpan: 3, rowSpan: 1 },
    { id: 2, colSpan: 4, rowSpan: 1 },
    { id: 3, colSpan: 3, rowSpan: 1 },
    { id: 4, colSpan: 2, rowSpan: 2 },
    { id: 5, colSpan: 2, rowSpan: 1 },
    { id: 6, colSpan: 3, rowSpan: 1 },
    { id: 7, colSpan: 2, rowSpan: 1 },
    { id: 8, colSpan: 3, rowSpan: 2 },
    { id: 9, colSpan: 4, rowSpan: 2 },
    { id: 10, colSpan: 4, rowSpan: 1 },
    { id: 11, colSpan: 3, rowSpan: 1 },
    { id: 12, colSpan: 2, rowSpan: 1 },
    { id: 13, colSpan: 2, rowSpan: 1 },
    { id: 14, colSpan: 3, rowSpan: 1 },
    { id: 15, colSpan: 2, rowSpan: 1 },
    { id: 16, colSpan: 2, rowSpan: 1 },
    { id: 17, colSpan: 2, rowSpan: 1 },
    { id: 18, colSpan: 2, rowSpan: 1 },
    { id: 19, colSpan: 2, rowSpan: 1 },
    { id: 20, colSpan: 2, rowSpan: 1 },
    { id: 21, colSpan: 2, rowSpan: 1 }
  ]

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [imgId, setImgId] = useState(1)

  useEffect(() => {
    console.log(imgId)
    document.title = title
  }, [title])

  const arrowBtn = css`
    .control-arrow {
      padding: 10px !important;

      border-color: ${useColorModeValue('purple', 'orange')};
    }
  `

  return (
    <LazyLoad delay={0.1}>
      <Box css={arrowBtn}>
        <Carousel>
          {ImageConfig.map(({ id }) => {
            return (
              <DalatImage
                src={`/images/dalat/dalat_${id}.jpg`}
                onClick={() => {
                  setImgId(id)
                  onOpen()
                }}
              />
            )
          })}
        </Carousel>
        <ImageModal
          isOpen={isOpen}
          onClose={onClose}
          src={`/images/dalat/dalat_${imgId}.jpg`}
        />
      </Box>
    </LazyLoad>
  )
}
