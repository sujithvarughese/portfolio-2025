
import { aboutMeUpdated } from '../data/data.js'
import profilePicture from "../assets/images/profile/hera.png"
import { motion } from 'motion/react'
import santaHatImg from "../assets/images/backgrounds/santa-hat.png"
import { Box, Container, Grid, Image, Text, Title } from '@mantine/core'


const About = () => {


  return (
      <Grid pos="relative" w="100%" h="100vh">

        <Box w={{ base: 400, md: 600 }} h={600} p={{xs: 3, md: 8, lg: 10}} radius={3}
          pos="absolute" left={0} right={0} top={0} bottom={0} m="auto"
        >
          <Title style={{ textAlign: "center" }}>About Me</Title>
          <Text style={{ whiteSpace: "break-spaces", textAlign: "justify", textJustify: "auto"}} size="xl">
            {aboutMeUpdated}
          </Text>
        </Box>

        <Image
          src={profilePicture}
          alt="Profile Picture"
          borderRadius={3}
          pos="absolute"
          top={10}
          right={160}
          w={240}
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
          style={{ zIndex: -100}}
        />

        <Image
          src={profilePicture}
          alt="Profile Picture"
          borderRadius={3}
          pos="absolute"
          bottom={120}
          left={360}
          margin="auto"
          w={300}
          style={{ zIndex: -100}}
        />

      </Grid>



  )
}


export default About