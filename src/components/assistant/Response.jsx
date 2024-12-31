import { Box, Loader, Modal, Title, Text } from '@mantine/core'


const Response = ({ opened, close, response, loading, error }) => {


  return (
    <Modal
      opened={opened}
      keepMounted
      maxWidth="xl"
      onClose={close}
      aria-describedby="alert-dialog-slide-description"
    >
      <Title>AI Assistant</Title>
      <Box>
        {loading ?
          <Box sx={{ display: 'flex', justifyContent: "center" }}>
            {loading && <Loader />}
          </Box>
        :
          <Text whiteSpace="break-spaces">{response}</Text>

        }
      </Box>
    </Modal>
  )
}

export default Response