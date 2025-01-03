
import { useEffect, useState } from 'react'
import Response from './Response.jsx'
import * as React from 'react'
import useSubmit from '../../hooks/useSubmit.js'
import {
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  Grid,
  Menu,
  Paper,
  ScrollArea,
  Text,
  Textarea,
  Title
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IoIosSend } from "react-icons/io";
import Chat from './Chat.jsx'

const Assistant = ({ opened, close }) => {

  const [query, setQuery] = useState("")
  const { response, error, loading, submitForm } = useSubmit()
  const [chat, setChat] = useState([{
    sender: "assistant",
    message: 'Hello! I am your personal AI assistant to answer any questions you may have about Sujith. Try asking a question like "What are some of Sujith\'s recent projects?", or "What are some of Sujith\'s skills"?'
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
    console.log(chat)
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
    >
      <Flex direction="column" gap={16}>
        <Chat chat={chat} />
        <Textarea
          autosize
          minRows={4}
          name="body"
          placeholder="Create Message"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <Flex justify="flex-end" py={12}>
          <Button onClick={handleSubmit} loading={loading}>Send</Button>
        </Flex>
      </Flex>

    </Drawer>

  )
}

export default Assistant