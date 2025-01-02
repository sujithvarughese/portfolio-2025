import { Box, Modal, Text } from '@mantine/core'

const MobilePopUp = ({ opened, onClose, link }) => {

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Text id="modal-modal-title" variant="h6" component="h2">
          Warning
        </Text>
        <Text id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
          This is a mobile application and is not designed for web or mobile browsers. This demo is to illustrate navigation and functionality only. Layout, images, and icons will not be rendered true to application.
        </Text>
        <a href={link} target="_blank" rel="noreferrer"><Text variant="subtitle1" fontSize="20px" color="warning.main">Continue to App</Text></a>
      </Box>
    </Modal>
  )
}


export default MobilePopUp