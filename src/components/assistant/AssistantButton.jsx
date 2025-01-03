import React from 'react'
import { Button } from '@mantine/core'

const AssistantButton = ({ open }) => {
  return (
    <Button onClick={open} size="lg">AI Assistant</Button>
  )
}

export default AssistantButton