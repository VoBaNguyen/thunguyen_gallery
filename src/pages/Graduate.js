import { Box, Image, useDisclosure } from '@chakra-ui/react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import ImageModal from '../components/ImageModal'

function ProductImage({ id, onExpand }) {
  return (
    <motion.div onClick={() => onExpand(id)} layoutId={`product-${id}`}>
      <Image
        padding="0 5px 5px 5px"
        borderRadius="10px"
        src={`/images/graduate/graduate_${id}.jpg`}
        objectFit="cover"
        alt="Graduate Image"
        cursor="pointer"
      />
    </motion.div>
  )
}

export default function Graduate({ title }) {
  const [productIds, setProductIds] = useState([
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
  ])
  const [primaryProduct, setPrimaryProduct] = useState(1)
  const { isOpen, onOpen, onClose } = useDisclosure()

  function setAsPrimary(id) {
    const currentProductId = primaryProduct
    const newProductIds = [
      ...productIds.filter(x => x !== id),
      currentProductId
    ]
    setPrimaryProduct(id)
    setProductIds(newProductIds)
  }

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <Box
      width="100%"
      height="80vh"
      display="flex"
      flexDirection="row"
      overflow="hidden"
      borderRadius="0.5rem"
      position="relative"
    >
      <AnimateSharedLayout type="crossfade">
        <Box width="85%" position="relative">
          <AnimatePresence>
            <motion.div
              key={`product-${primaryProduct}`}
              layoutId={`product-${primaryProduct}`}
              position="absolute"
              top="0"
              left="0"
            >
              <Image
                src={`/images/graduate/graduate_${primaryProduct}.jpg`}
                objectFit="cover"
                objectPosition="center center"
                alt="Graduate Image"
                width="100%"
                height="80vh"
                cursor="pointer"
                onClick={onOpen}
              />
            </motion.div>
          </AnimatePresence>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          width="15%"
          zIndex="1"
          overflowY="scroll"
        >
          <AnimatePresence>
            {productIds.map(id => (
              <ProductImage id={id} key={id} onExpand={setAsPrimary} />
            ))}
          </AnimatePresence>
        </Box>
      </AnimateSharedLayout>
      <ImageModal isOpen={isOpen} onClose={onClose} modalId={primaryProduct} />
    </Box>
  )
}
