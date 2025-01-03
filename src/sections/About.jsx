
import { aboutMeUpdated } from '../data/data.js'
import profilePicture from "../assets/images/profile/hera.png"
import profilePicture2 from "../assets/images/profile/profile.png"

import { motion } from 'motion/react'
import santaHatImg from "../assets/images/backgrounds/santa-hat.png"
import { BackgroundImage, Box, Container, Flex, Grid, Image, Text, Title } from '@mantine/core'


const About = () => {


  return (
      <Flex direction="column" align="center" justify="space-around" h="89vh" pos="relative" bg="white">
        <Box w={400} radius={3} px={16} mx="auto"  bg="white">
          <Title style={{ textAlign: "center", fontSize: 42 }}>About Me</Title>
          <Text style={{ whiteSpace: "break-spaces", textAlign: "justify", textJustify: "auto"}} size="xl">
            {aboutMeUpdated}
          </Text>
        </Box>

        <Image
          src={profilePicture}
          alt="Profile Picture"
          w={{base: 400, sm: 640 }}
          radius={2}
        />
        <Box
          bg="black"
          borderRadius={3}
          w={{ base: 410, sm: 660 }}
          h={{ base: 245, sm: 395 }}
          pos="absolute"
          bottom={{ base: 100, sm: 60 }}
          style={{ zIndex: -10, borderRadius: 2 }}
          display={{ base: "none", sm: "initial"}}
        />
      </Flex>



  )
}


export default About