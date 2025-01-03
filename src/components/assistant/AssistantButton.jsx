import React from 'react'
import { ActionIcon, Indicator, Tooltip } from '@mantine/core'
import { RiAiGenerate2 } from "react-icons/ri";

const AssistantButton = ({ open }) => {
  return (
    <Tooltip label="AI Assistant" >
      <Indicator label="New" position="top-start" size={16} color="orange.7">
        <ActionIcon variant="gradient" onClick={open} size={42}><RiAiGenerate2 size={32} /></ActionIcon>
      </Indicator>
    </Tooltip>

  )
}

export default AssistantButton