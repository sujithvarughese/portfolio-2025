import { useEffect, useState } from 'react'
import useSubmit from '../../hooks/useSubmit.js'
import { Box, Button, Drawer, Flex, Textarea, Title } from '@mantine/core'
import { IoIosSend } from "react-icons/io";
import Message from './Message.jsx'
import LoadingMessage from './LoadingMessage.jsx'
import {useDispatch, useSelector} from "react-redux";
import {addMessageToChat, fetchAiResponse} from "../../features/assistantSlice.js";
import {useForm} from "@mantine/form";

const Assistant = ({ opened, close, form, handleSubmit }) => {

  const chat = useSelector(state => state.assistant.chat)
  const loading = useSelector(state => state.assistant.loading)




  return (
    <Drawer
      opened={opened} onClose={close}
      position="right"
      title={<Title>AI Assistant</Title>}
      size="sm"
      removeScrollProps={{ allowPinchZoom: true }}
    >
      <Flex direction="column" gap={20}>
        <Box>
          {chat?.map((message, index) => <Message key={index} {...message} />)}
          {loading && <LoadingMessage />}
        </Box>
        <form onSubmit={form.onSubmit(values => handleSubmit(values.query))}>
          <Flex direction="column" gap={20}>
            <Box mx={12}>
              <Textarea
                data-autofocus
                minRows={4}
                placeholder="Create Message"
                key={form.key('query')}
                {...form.getInputProps('query')}
              />
            </Box>

            <Flex justify="flex-end" mx={12}>
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