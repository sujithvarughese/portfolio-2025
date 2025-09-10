import React from 'react'
import { ActionIcon, Anchor, Box, Button, Flex, Image, Text, Tooltip } from '@mantine/core'
import linkedInIcon from '../assets/images/icons/linkedin-icon.svg';
import githubIcon from "../assets/images/icons/github-mark-white.svg"
import sendMessageIcon from "../assets/images/icons/send-message.svg"
import { emailAddress } from '../data/data.js'
import resume from '../assets/images/varughese_resume.pdf'
import cvIcon from '../assets/images/icons/cv.png'


const Footer = () => {
  return (
    <Flex direction="column" align="center" py={42} gap={8} bg="black">
      <Button component="a" href={`mailto:${emailAddress}`}>Let's Connect</Button>
      <Text c="white">Get in touch! Feedback and inquiries are all welcome.</Text>
      <Flex className="social-icon" gap={6}>
        <Tooltip label="Resumé">
          <ActionIcon component="a" href={resume} target="_blank" rel="noreferrer"><Image src={cvIcon}  alt="cv" w="50%" /></ActionIcon>
        </Tooltip>
        <Tooltip label="LinkedIn">
          <ActionIcon component="a" href="https://www.linkedin.com/in/sujithvarughese/" target="_blank" rel="noreferrer"><Image src={linkedInIcon} alt="linkedin" w="50%"/></ActionIcon>
        </Tooltip>
        <Tooltip label="GitHub">
          <ActionIcon component="a" href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer"><Image src={githubIcon} alt="github" w="50%"/></ActionIcon>
        </Tooltip>
        <Tooltip label="Email">
          <ActionIcon component="a" href={`mailto:${emailAddress}`}><Image src={sendMessageIcon} alt="mail" w="50%"/></ActionIcon>
        </Tooltip>
      </Flex>
      <Text c="#B8B8B8">Copyright 2025. All Rights Reserved</Text>
    </Flex>
  )
}

export default Footer