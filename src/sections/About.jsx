
import { aboutMeUpdated } from '../data/data.js'
import profilePicture from "../assets/images/profile/hera.png"
import profilePicture2 from "../assets/images/profile/profile.png"

import { motion } from 'motion/react'
import santaHatImg from "../assets/images/backgrounds/santa-hat.png"
import { BackgroundImage, Box, Container, Flex, Grid, Image, Text, Title } from '@mantine/core'


const About = () => {


  return (
      <Flex direction="column" align="center">

        <Box w={400} p={36} radius={3} mx="auto"  bg="white" style={{ zIndex: 300 }}>
          <Title style={{ textAlign: "center" }}>About Me</Title>
          <Text style={{ whiteSpace: "break-spaces", textAlign: "justify", textJustify: "auto"}} size="xl">
            {aboutMeUpdated}
          </Text>
        </Box>

        <Image
          src={profilePicture}
          alt="Profile Picture"
          borderRadius={3}
          w={360}
          style={{ zIndex: 100}}
        />

      </Flex>



  )
}


export default About