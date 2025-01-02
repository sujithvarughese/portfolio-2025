
import { aboutMeUpdated } from '../data/data.js'
import profilePicture from "../assets/images/profile/hera.png"
import profilePicture2 from "../assets/images/profile/profile.png"

import { motion } from 'motion/react'
import santaHatImg from "../assets/images/backgrounds/santa-hat.png"
import { BackgroundImage, Box, Container, Grid, Image, Text, Title } from '@mantine/core'


const About = () => {


  return (
      <Box pos="relative" h={800}>

        <Box w={400} p={36} radius={3} mx="auto" my={56} bg="white" style={{ zIndex: 300 }}>
          <Title style={{ textAlign: "center" }}>About Me</Title>
          <Text style={{ whiteSpace: "break-spaces", textAlign: "justify", textJustify: "auto"}} size="xl">
            {aboutMeUpdated}
          </Text>
        </Box>

        <Image
          src={profilePicture2}
          alt="Profile Picture"
          borderRadius={3}
          h={700}
          w="80%"
          right={0}
          pos="absolute"
          top={24}
          style={{ zIndex: -100}}
        />

        <Image
          src={profilePicture}
          alt="Profile Picture"
          borderRadius={3}
          pos="absolute"
          top={240}
          left={10}
          w={240}
          display={{ base: "none", md: "initial"}}
          style={{ zIndex: 100}}
        />

      </Box>



  )
}


export default About