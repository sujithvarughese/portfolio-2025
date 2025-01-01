import { Box, Loader, Modal, Title, Text, Flex } from '@mantine/core'


const Response = ({ opened, close, response, loading, error }) => {


  return (
    <Modal
      opened={opened}
      onClose={close}
      aria-describedby="alert-dialog-slide-description"
    >
      <Title style={{ textAlign: "center"}}>AI Assistant</Title>

      <Flex justify="center" p={12}>
        {loading && <Loader style={{ alignSelf: "center", justifySelf: "center"}}/>}
      </Flex>

      <Text whiteSpace="break-spaces">{response}</Text>



    </Modal>
  )
}

export default Response