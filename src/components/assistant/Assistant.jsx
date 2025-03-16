import {Box, Button, Drawer, Flex, Textarea, TextInput, Title} from '@mantine/core'
import { IoIosSend } from "react-icons/io";
import Message from './Message.jsx'
import LoadingMessage from './LoadingMessage.jsx'
import {useSelector} from "react-redux";
import {useRef, useEffect} from "react";


const Assistant = ({ opened, close, form, handleSubmit }) => {

  const chat = useSelector(state => state.assistant.chat)
  const loading = useSelector(state => state.assistant.loading)

  const bottomRef = useRef();

  useEffect(() => {
    if (bottomRef?.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);

  return (
    <Drawer
      opened={opened} onClose={close}
      position="right"
      size="sm"
      removeScrollProps={{ allowPinchZoom: true }}
      style={{ position: "relative" }}
    >
      <Title order={2} pos="absolute" top={12} style={{ textAlign: "center", fontSize: 28, zIndex: 10000 }}>AI Assistant</Title>
      <Flex direction="column" gap={20}>
        <Box>
          {chat?.map((message, index) => <Message key={index} {...message} />)}
          {loading && <LoadingMessage />}
        </Box>
        <form onSubmit={form.onSubmit(values => handleSubmit(values.query))}>
          <Flex direction="column" gap={20}>
            <Box mx={12}>
              <TextInput
                data-autofocus
                placeholder="Create Message"
                key={form.key('query')}
                {...form.getInputProps('query')}
              />
            </Box>

            <Flex justify="flex-end" mx={12} ref={bottomRef}>
              <Button
                type="submit"
                loading={loading}
                variant="gradient"
                loaderProps={{ type: 'dots' }}
                rightSection={<IoIosSend size={20}/>}
              >Send
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Drawer>

  )
}

export default Assistant