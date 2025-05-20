import React from 'react'
import { Anchor, Box, Button, Flex, Image, Title } from '@mantine/core'
import resume from "../assets/images/varughese_resume.pdf"
const emailAddress = "sujith.varug@gmail.com"

const HoverHeader = () => {
  return (
    <Flex justify="space-between">
        <Box display={{ base: "none", md: "initial"}}>
          <Image src="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718386/profile-small_jvan2o.jpg" alt="profile" w={200}/>
        </Box>

        <Flex justify="space-around" w="100%" display={{ base: "none", sm: "flex" }}>
          <Box>
            <Title order={2}>Certificates</Title>
            <Flex direction="column">
              <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718361/diploma_mv2evg.png" target="_blank" rel="noreferrer">Bachelor's Diploma</Anchor>
              <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747725035/CompTIA_A_ce_certificate_tfbzb8.png" target="_blank" rel="noreferrer">CompTIA A+</Anchor>
              <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747725095/Meta_front_end_certificate-_Coursera_eeuipu.png" target="_blank" rel="noreferrer">Meta Front End Developer</Anchor>
              <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718364/accounting_certificate_ff7vvg.png" target="_blank" rel="noreferrer">Accounting Technology</Anchor>
              <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718364/business_management_cert_kmza3i.png" target="_blank" rel="noreferrer">Business Management</Anchor>
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


      <Flex justify="space-around" w="100%" display={{ sm: "none" }}>
        <Box>
          <Title order={2}>Certificates</Title>
          <Flex direction="column">
            <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718361/diploma_mv2evg.png" target="_blank" rel="noreferrer">Bachelor's Diploma</Anchor>
            <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747725035/CompTIA_A_ce_certificate_tfbzb8.png" target="_blank" rel="noreferrer">CompTIA A+</Anchor>
            <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747725095/Meta_front_end_certificate-_Coursera_eeuipu.png" target="_blank" rel="noreferrer">Meta Front End Developer</Anchor>
            <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718364/accounting_certificate_ff7vvg.png" target="_blank" rel="noreferrer">Accounting Technology</Anchor>
            <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718364/business_management_cert_kmza3i.png" target="_blank" rel="noreferrer">Business Management</Anchor>
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