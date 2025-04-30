import React from 'react'
import { ActionIcon, Anchor, Box, Button, Flex, Image, Title } from '@mantine/core'
import profilePictureMobile from "../assets/images/profile/profile-small.jpeg"
import diploma from "../assets/images/certificates/diploma.png"
import compTiaCert from "../assets/images/certificates/compTIA_cert.pdf"
import metaCert from "../assets/images/certificates/meta_frontend_cert.pdf"
import javascriptCert from "../assets/images/certificates/adv_javascript_cert.jpg"
import reactNativeCert from "../assets/images/certificates/react_native_cert.jpg"
import mernCert from "../assets/images/certificates/MERN_2024_cert.jpg"
import accountingCert from "../assets/images/certificates/accounting_certificate.png"
import businessManagementCert from "../assets/images/certificates/business_management_cert.png"
import resume from "../assets/images/certificates/varughese_resume.pdf"
const emailAddress = "sujith.varug@gmail.com"

import { projects } from "../data/projects.js"
import project from '../components/Project.jsx'
import mailIcon from '../assets/images/icons/send-message.svg'

const HoverHeader = () => {
  return (
    <Flex justify="space-between">
        <Box display={{ base: "none", md: "initial"}}>
          <Image src={profilePictureMobile} alt="profile" w={200}/>
        </Box>

        <Flex justify="space-around" w="100%" display={{ base: "none", sm: "flex" }}>
          <Box>
            <Title order={2}>Certificates</Title>
            <Flex direction="column">
              <Anchor href={diploma} target="_blank" rel="noreferrer">Bachelor's Diploma</Anchor>
              <Anchor href={compTiaCert} target="_blank" rel="noreferrer">CompTIA A+</Anchor>
              <Anchor href={metaCert} target="_blank" rel="noreferrer">Meta Front End Developer</Anchor>
              <Anchor href={accountingCert} target="_blank" rel="noreferrer">Accounting Technology</Anchor>
              <Anchor href={businessManagementCert} target="_blank" rel="noreferrer">Business Management</Anchor>
              <Anchor href={javascriptCert} target="_blank" rel="noreferrer">Advanced Javascript</Anchor>
              <Anchor href={reactNativeCert} target="_blank" rel="noreferrer">React Native 2024</Anchor>
              <Anchor href={mernCert} target="_blank" rel="noreferrer">MERN Stack 2024</Anchor>
            </Flex>
          </Box>
          {/*
          <Box>
            <Title order={2}>Projects</Title>
            <Grid maw={{ base: 220, sm: 340 }}>
              {projects.map(project =>
                <Grid.Col key={project.title} span={{ base: 6, xs: 4 }}>
                  <Indicator label={project.title} position="bottom-center" offset={6} size="lg">
                    <Tooltip label={project.heading} multiline>
                      <ActionIcon size="110px" component="a" href={project.link} target="_blank" rel="noreferrer"><Image src={project.coverImage} /></ActionIcon>
                    </Tooltip>
                  </Indicator>
                </Grid.Col>
              )}
            </Grid>
          </Box>
          */}
          <Box>
            <Title order={2}>Links</Title>
            <Flex direction="column">
              <Anchor href={resume} target="_blank" rel="noreferrer">Resumé</Anchor>
              <Anchor href="https://www.linkedin.com/in/sujithvarughese/" target="_blank" rel="noreferrer">LinkedIn</Anchor>
              <Anchor href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer">GitHub</Anchor>
            </Flex>
            <Button my={12} component="a" href={`mailto:${emailAddress}`}>Contact Me</Button>
          </Box>
        </Flex>


      <Flex justify="space-around" w="100%" display={{ sm: "none" }}>
        <Box>
          <Title order={2}>Certificates</Title>
          <Flex direction="column">
            <Anchor href={diploma} target="_blank" rel="noreferrer">Bachelor's Diploma</Anchor>
            <Anchor href={compTiaCert} target="_blank" rel="noreferrer">CompTIA A+</Anchor>
            <Anchor href={metaCert} target="_blank" rel="noreferrer">Meta Front End Developer</Anchor>
            <Anchor href={accountingCert} target="_blank" rel="noreferrer">Accounting Technology</Anchor>
            <Anchor href={businessManagementCert} target="_blank" rel="noreferrer">Business Management</Anchor>
            <Anchor href={javascriptCert} target="_blank" rel="noreferrer">Advanced Javascript</Anchor>
            <Anchor href={reactNativeCert} target="_blank" rel="noreferrer">React Native 2024</Anchor>
            <Anchor href={mernCert} target="_blank" rel="noreferrer">MERN Stack 2024</Anchor>
          </Flex>
        </Box>
        <Box>
          <Title order={2}>Links</Title>
          <Flex direction="column">
            <Anchor href={resume} target="_blank" rel="noreferrer">Resumé</Anchor>
            <Anchor href="https://www.linkedin.com/in/sujithvarughese/" target="_blank" rel="noreferrer">LinkedIn</Anchor>
            <Anchor href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer">GitHub</Anchor>
          </Flex>
          <Button my={12} component="a" href={`mailto:${emailAddress}`}>Contact Me</Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default HoverHeader