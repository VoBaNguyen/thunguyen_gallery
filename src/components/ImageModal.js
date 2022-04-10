import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react'

export default function ImageModal({ isOpen, onClose, modalId }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
      <ModalContent>
        <ModalBody display="flex" alignItems="center" justifyContent="center">
          <Image
            src={`/images/graduate/graduate_${modalId}.jpg`}
            objectFit="contain"
            objectPosition="center center"
            height="100%"
            alt="Graduate Image"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
