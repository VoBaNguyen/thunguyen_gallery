import { Grid, GridItem, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ImageGridImage from '../components/ImageGridItem'
import ImageModal from '../components/ImageModal'
import LazyLoad from '../components/LazyLoad'

export default function Graduate({ chilren, title }) {
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
    { id: 16, colSpan: 2, rowSpan: 1 }
  ]

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [imgId, setImgId] = useState(1)

  useEffect(() => {
    document.title = title
    console.log(imgId)
  }, [title])

  return (
    <>
      <Grid templateColumns="repeat(7, 1fr)" gap={2}>
        {ImageConfig.map(imgCfg => {
          return (
            <GridItem
              rowSpan={imgCfg.rowSpan}
              colSpan={imgCfg.colSpan}
              position="relative"
            >
              {/* <Text
                fontWeight="bold"
                fontSize="20px"
                position="absolute"
                top="0"
                left="0"
                color="blue"
              >
                {imgCfg.id}
              </Text> */}
              <LazyLoad delay={imgCfg.id * 0.1}>
                <ImageGridImage
                  src={`/images/graduate/graduate_${imgCfg.id}.jpg`}
                  onClick={() => {
                    setImgId(imgCfg.id)
                    onOpen()
                  }}
                />
              </LazyLoad>
            </GridItem>
          )
        })}
      </Grid>
      <ImageModal
        isOpen={isOpen}
        onClose={onClose}
        src={`/images/graduate/graduate_${imgId}.jpg`}
      />
    </>
  )
}
