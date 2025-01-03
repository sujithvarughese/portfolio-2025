import { Box, Text } from '@mantine/core'
import * as React from 'react'
import Message from './Message.jsx'

const Chat = ({ chat }) => {
  return (
    <Box>
      {chat?.map((message, index) => <Message key={index} {...message} />).reverse()}
    </Box>
  )
}

export default Chat