import React from 'react'
import {
  ActionIcon,
  Anchor,
  AppShellHeader,
  Box,
  Burger,
  Button,
  Flex,
  Image,
  Menu,
  UnstyledButton
} from '@mantine/core'
import svImage from "../assets/images/profile/sv.jpeg"
import resume from "../assets/images/certificates/varughese_resume.pdf"
import diploma from "../assets/images/certificates/diploma.png"
import compTiaCert from "../assets/images/certificates/compTIA_cert.pdf"
import metaCert from "../assets/images/certificates/meta_frontend_cert.pdf"
import javascriptCert from "../assets/images/certificates/adv_javascript_cert.jpg"
import reactNativeCert from "../assets/images/certificates/react_native_cert.jpg"
import mernCert from "../assets/images/certificates/MERN_2024_cert.jpg"
import accountingCert from "../assets/images/certificates/accounting_certificate.png"
import businessManagementCert from "../assets/images/certificates/business_management_cert.png"
const emailAddress = "sujith.varug@gmail.com"
import linkedInIcon from '../assets/images/icons/linkedin-icon.svg';
import githubIcon from "../assets/images/icons/github-mark-white.svg"
const Header = ({ opened, toggle }) => {
  return (
    <AppShellHeader>
      <Flex justify="space-between" align="center" h="100%" p={24} bg="black">
        <Flex align="center">
          <Image src={svImage} alt="SV" height={55} ></Image>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button variant="transparent">Certificates</Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Certificates</Menu.Label>
              <Menu.Item component="a" href={diploma} target="_blank" rel="noreferrer">Bachelor's Diploma</Menu.Item>
              <Menu.Item component="a" href={compTiaCert} target="_blank" rel="noreferrer">CompTIA A+</Menu.Item>
              <Menu.Item component="a" href={metaCert} target="_blank" rel="noreferrer">Meta Front End Developer</Menu.Item>
              <Menu.Item component="a" href={accountingCert} target="_blank" rel="noreferrer">Accounting Technology</Menu.Item>
              <Menu.Item component="a" href={businessManagementCert} target="_blank" rel="noreferrer">Business Management</Menu.Item>
              <Menu.Item component="a" href={javascriptCert} target="_blank" rel="noreferrer">Advanced Javascript</Menu.Item>
              <Menu.Item component="a" href={reactNativeCert} target="_blank" rel="noreferrer">React Native 2024</Menu.Item>
              <Menu.Item component="a" href={mernCert} target="_blank" rel="noreferrer">MERN Stack 2024</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Button component="a" variant="transparent" href={resume} target="_blank" rel="noreferrer">Resume</Button>
        </Flex>

        <Flex align="center">
          <Flex className="social-icon">
            <ActionIcon component="a" href="https://www.linkedin.com/in/sujithvarughese/" className="social-icon" target="_blank" rel="noreferrer"><Image src={linkedInIcon} alt="Icon" /></ActionIcon>
            <ActionIcon component="a" href="http://github.com/sujithvarughese" className="social-icon" target="_blank" rel="noreferrer"><Image src={githubIcon} alt="Icon" /></ActionIcon>
          </Flex>
          <Box className="connect">
            <UnstyledButton component="a" href={`mailto:${emailAddress}`}>CONTACT ME</UnstyledButton>
          </Box>

        </Flex>



      </Flex>


    </AppShellHeader>
  )
}

const socialStyles = {

}

export default Header