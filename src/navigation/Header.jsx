import React from 'react'
import { ActionIcon, AppShellHeader, Burger, Flex, Group, HoverCard, Image, Text, Title, Tooltip, } from '@mantine/core'
import resume from "../assets/images/varughese_resume.pdf"
const emailAddress = "sujith.varug@gmail.com"
import linkedInIcon from '../assets/images/icons/linkedin-icon.svg';
import githubIcon from "../assets/images/icons/github-mark-white.svg"
import mailIcon from "../assets/images/icons/send-message.svg"
import cvIcon from "../assets/images/icons/cv.png"
import HoverHeader from './HoverHeader.jsx'
import AssistantButton from '../components/assistant/AssistantButton.jsx'
import {motion} from "motion/react";

const Header = ({ open }) => {

  return (
    <AppShellHeader>
      <Flex
        component={motion.div}
        initial={{ y: "-20%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        align="center" justify="space-between" p={12}>

        <Group>
          <HoverCard width="98%" offset={13} display={{ sm: "none" }}>
            <HoverCard.Target>
              <Burger  />
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <HoverHeader />
            </HoverCard.Dropdown>
          </HoverCard>

          <Flex className="social-icon" gap={6}>
            <Tooltip label="Resumé">
              <ActionIcon component="a" href={resume} target="_blank" rel="noreferrer" display={{ base: "none", xs: "initial" }}><Image src={cvIcon} alt="cv" w="50%" /></ActionIcon>
            </Tooltip>
            <Tooltip label="LinkedIn">
              <ActionIcon component="a" href="https://www.linkedin.com/in/sujithvarughese/" target="_blank" rel="noreferrer" display={{ base: "none", sm: "initial" }}><Image src={linkedInIcon} alt="linkedin" w="50%"/></ActionIcon>
            </Tooltip>
            <Tooltip label="GitHub">
              <ActionIcon component="a" href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer" display={{ base: "none", sm: "initial" }}><Image src={githubIcon} alt="github" w="50%"/></ActionIcon>
            </Tooltip>
            <Tooltip label="Email">
              <ActionIcon component="a" href={`mailto:${emailAddress}`} display={{ base: "none", xs: "initial" }}><Image src={mailIcon} alt="mail" w="50%"/></ActionIcon>
            </Tooltip>
          </Flex>
        </Group>

        <Flex direction="column" align="center" pos="fixed" m="auto" left={0} right={0} style={{ zIndex: -10 }}>
          <Title order={2}>Sujith Varughese</Title>
          <Text>Miami, FL</Text>
        </Flex>

        <AssistantButton open={open}/>
      </Flex>
    </AppShellHeader>
  )
}

const socialStyles = {

}

export default Header