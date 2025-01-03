import { useEffect, useState } from 'react'
import useSubmit from '../../hooks/useSubmit.js'
import { Box, Button, Drawer, Flex, Textarea, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IoIosSend } from "react-icons/io";
import Message from './Message.jsx'
import * as React from 'react'
import LoadingMessage from './LoadingMessage.jsx'

const Assistant = ({ opened, close }) => {

  const [query, setQuery] = useState("")
  const { response, error, loading, submitForm } = useSubmit()
  const [chat, setChat] = useState([{
    sender: "assistant",
    message: 'Hello! I am your personal AI assistant to answer any questions you may have about Sujith. Try asking a question like "What are some of Sujith\'s recent projects?", or "What programming languages is Sujith skilled in?"'
  }])

  const handleSubmit = async () => {
    if (!query) {
      return
    }
    const message = { sender: "user", message: query }
    setChat([message, ...chat])
    setQuery("")
    await submitForm(query)
  }

  useEffect(() => {
    if (!response || chat[0]?.sender === "assistant") {
      return
    }
    const message = { sender: "assistant", message: response }
    setChat([message, ...chat])
  }, [response])


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
          {chat?.map((message, index) => <Message key={index} {...message} />).reverse()}
          {loading && <LoadingMessage />}
        </Box>
        <Box mx={12}>
          <Textarea
            data-autofocus
            minRows={4}
            name="body"
            placeholder="Create Message"
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </Box>


        <Flex justify="flex-end" mx={12}>
          <Button
            onClick={handleSubmit}
            loading={loading}
            loaderProps={{ type: 'dots' }}
            rightSection={<IoIosSend size={20}/>}
          >Send
          </Button>
        </Flex>



      </Flex>
    </Drawer>

  )
}

export default Assistant