import React from 'react'
import { Button } from '@mantine/core'

const AssistantButton = ({ open }) => {
  return (
    <>
      <Button display={{ sm: "none" }} onClick={open} size="sm">AI Assistant</Button>
      <Button display={{ base: "none", sm: "initial" }} onClick={open} size="xl">AI Assistant</Button>
    </>
  )
}

export default AssistantButton