import { Anchor, Box, Flex, Modal, Text, Title } from '@mantine/core'

const MobilePopUp = ({ opened, onClose, link }) => {

  return (
    <Modal opened={opened} onClose={onClose} withCloseButton={false}>
      <Flex direction="column" gap={16} p={16}>
        <Text style={{ fontSize: 18 }}>
          This is a mobile application demo designed to showcase navigation and functionality. Please note that the layout, images, and icons may not appear as they will in the app.
        </Text>
        <Flex justify="center">
          <Anchor href={link} target="_blank" rel="noreferrer" size="xl">Continue to App</Anchor>
        </Flex>
      </Flex>
    </Modal>
  )
}


export default MobilePopUp