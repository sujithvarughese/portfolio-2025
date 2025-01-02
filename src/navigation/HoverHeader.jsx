import React from 'react'
import { Anchor, Box, Flex, Grid, Image, Title } from '@mantine/core'
import profilePictureMobile from "../assets/images/profile/profile-small.png"
import diploma from "../assets/images/certificates/diploma.png"
import compTiaCert from "../assets/images/certificates/compTIA_cert.pdf"
import metaCert from "../assets/images/certificates/meta_frontend_cert.pdf"
import javascriptCert from "../assets/images/certificates/adv_javascript_cert.jpg"
import reactNativeCert from "../assets/images/certificates/react_native_cert.jpg"
import mernCert from "../assets/images/certificates/MERN_2024_cert.jpg"
import accountingCert from "../assets/images/certificates/accounting_certificate.png"
import businessManagementCert from "../assets/images/certificates/business_management_cert.png"
const HoverHeader = () => {
  return (
    <Grid>
      <Grid.Col span={5}>
        <Image src={profilePictureMobile} alt="profile" w={280} />
      </Grid.Col>
      <Grid.Col span={7}>
        <Flex justify="space-around">
          <Box>
            <Title>Certificates</Title>
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

          <Title>Projects</Title>
        </Flex>

      </Grid.Col>
    </Grid>
  )
}

export default HoverHeader