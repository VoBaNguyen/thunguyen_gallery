import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useColorModeValue
} from '@chakra-ui/react'

export default function ImageModal({ isOpen, onClose, src }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
      <ModalOverlay />
      <ModalContent backgroundColor="transparent">
        <ModalCloseButton
          zIndex={1}
          colorScheme={useColorModeValue('purple', 'orange')}
        />
        <ModalBody
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          onClick={onClose}
        >
          <Image
            position="absolute"
            src={src}
            objectFit="contain"
            objectPosition="center center"
            height="100%"
            alt="Graduate Image"
            zIndex={1}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
