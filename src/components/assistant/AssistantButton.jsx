import React, {useState} from 'react'
import {ActionIcon, Box, Indicator, Text, Tooltip} from '@mantine/core'
import { RiAiGenerate2 } from "react-icons/ri";
import { motion } from 'motion/react'

const AssistantButton = ({ open }) => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    open()
  }

  return (
    <Box
        component={motion.div}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        animate={clicked ?  {} : { scale: [1, 1.1, 1] }} // Flash effect
        transition={ clicked ? { ease: "easeInOut" } :{
          duration: 0.5, // Speed of flashing
          repeat: Infinity, // Loop forever
          repeatDelay: 2,
          type: "bounce",
        }}
    >
      <Tooltip label="AI Assistant" >
        <Indicator label="New" position="top-start" size={16} color="orange.7">
          <ActionIcon style={{ border: "4px solid orange"}} variant="gradient" onClick={handleClick} size={42}>
            <RiAiGenerate2 size={32} />
          </ActionIcon>
          <Text size="xs" c="orange.7" style={{ textAlign: "center" }}>Assistant</Text>
        </Indicator>
      </Tooltip>
    </Box>
  )
}


export default AssistantButton