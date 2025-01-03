import React from 'react'
import { ActionIcon, AppShellHeader, Burger, Flex, Group, HoverCard, Image, Text, Title, Tooltip, } from '@mantine/core'
import svImage from "../assets/images/profile/sv.jpeg"
import resume from "../assets/images/certificates/varughese_resume.pdf"
const emailAddress = "sujith.varug@gmail.com"
import linkedInIcon from '../assets/images/icons/linkedin-icon.svg';
import githubIcon from "../assets/images/icons/github-mark-white.svg"
import mailIcon from "../assets/images/icons/send-message.svg"
import cvIcon from "../assets/images/icons/cv.png"
import HoverHeader from './HoverHeader.jsx'

const Header = () => {

  return (
    <AppShellHeader>
      <Flex align="center" justify="space-between" p={12} w="100%">
        <Group>
          <HoverCard width="98%" offset={13}>
            <HoverCard.Target>
              <Burger  />
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <HoverHeader />
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>



        <Flex direction="column" align="center" pos="fixed" m="auto" left={0} right={0} style={{ zIndex: -10 }}>
          <Title order={2}>Sujith Varughese</Title>
          <Text>Miami, FL</Text>
        </Flex>

        <Flex className="social-icon" gap={6}>
          <Tooltip label="Resumé">
            <ActionIcon component="a" href={resume} target="_blank" rel="noreferrer" display={{ base: "none", sm: "initial" }}><Image src={cvIcon}  alt="cv" w="50%" /></ActionIcon>
          </Tooltip>
          <Tooltip label="LinkedIn">
            <ActionIcon component="a" href="https://www.linkedin.com/in/sujithvarughese/" target="_blank" rel="noreferrer" display={{ base: "none", sm: "initial" }}><Image src={linkedInIcon} alt="linkedin" w="50%"/></ActionIcon>
          </Tooltip>
          <Tooltip label="GitHub">
            <ActionIcon component="a" href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer" display={{ base: "none", sm: "initial" }}><Image src={githubIcon} alt="github" w="50%"/></ActionIcon>
          </Tooltip>
          <Tooltip label="Email">
            <ActionIcon component="a" href={`mailto:${emailAddress}`}><Image src={mailIcon} alt="mail" w="50%"/></ActionIcon>
          </Tooltip>
        </Flex>


      </Flex>
    </AppShellHeader>
  )
}

const socialStyles = {

}

export default Header