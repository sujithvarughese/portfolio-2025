import React from 'react'
import {ActionIcon, Box, Indicator, Text, Tooltip} from '@mantine/core'
import { RiAiGenerate2 } from "react-icons/ri";
import { motion } from 'motion/react'

const AssistantButton = ({ open }) => {

  return (
    <Box component={motion.div} whileInView={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
      <Tooltip label="AI Assistant" >
        <Indicator label="New" position="top-start" size={16} color="orange.7">
          <ActionIcon style={{ border: "4px solid orange"}} variant="gradient" onClick={open} size={48}>
            <RiAiGenerate2 size={32} />
          </ActionIcon>
          <Text size="xs" c="orange.7" style={{ textAlign: "center" }}>Assistant</Text>
        </Indicator>
      </Tooltip>
    </Box>
  )
}


export default AssistantButton