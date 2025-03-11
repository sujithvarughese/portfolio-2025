import { aboutMeUpdated } from '../data/data.js'
import profilePicture from "../assets/images/profile/hera.jpeg"
import {  Box, Flex, Image, Text, Title } from '@mantine/core'


const About = () => {


  return (
      <Flex direction="column" align="center" justify="space-evenly" pos="relative" bg="white" py={84} gap={36}>
        <Box w={400} radius={3} px={16} mx="auto"  bg="white">
          <Title style={{ textAlign: "center", fontSize: 42 }}>About Me</Title>
          <Text style={{ whiteSpace: "break-spaces", textAlign: "justify", textJustify: "auto"}}>
            {aboutMeUpdated}
          </Text>
        </Box>

        <Image
          src={profilePicture}
          alt="Profile Picture"
          w={{base: 360, sm: 640 }}
          radius={8}
        />
      </Flex>



  )
}


export default About