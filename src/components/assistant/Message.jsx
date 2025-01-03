import { Avatar, Box, Paper, Text } from '@mantine/core'
import * as React from 'react'

const Message = ({ sender, message }) => {
  return (
    <Box pos="relative">
      <Paper
        shadow="lg"
        radius="md"
        mx={24}
        mt={4}
        mb={16}
        p={8}
        w="80%"
        bg={`${sender === "user" ? "blue.4" : "lightgray"}`}
        style={{ justifySelf: `${sender === "user" ? "end" : "start"}` }}
      >
        <Text>{message}</Text>
      </Paper>
      {sender === "assistant" &&
        <Avatar
          name="AI"
          pos="absolute"
          color="initials"
          left={-12}
          bottom={-24}
        />}
    </Box>

  )
}

export default Message