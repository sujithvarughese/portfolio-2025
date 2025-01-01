
import { aboutMeUpdated } from '../data/data.js'
import profilePicture from "../assets/images/profile/hera.png"
import { motion } from 'motion/react'
import santaHatImg from "../assets/images/backgrounds/santa-hat.png"
import { Box, Container, Image, Text, Title } from '@mantine/core'


const About = () => {

  const cardVariants = {
    offscreen: {
      y: 200,
      scale: 0.3,
      opacity: 0.2
    },
    onscreen: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1
      }
    },
    viewport: { once: true },
  };

  return (

      <Container
        component={motion.section}
        style={{ display: { xs: "none", md: "revert" }, marginBottom: 52, marginTop: 16 }}
      >
          <Box
            component={motion.div}
            initial={{...cardVariants.offscreen, x: -300}}
            whileInView={{ ...cardVariants.onscreen}}
            viewport={cardVariants.viewport}
            w={600}
            h={600}
            m={{ xs: "auto", md: "initial" }}
            justify='center'
            bg='red.1'
            p={{xs: 3, md: 8, lg: 10}}
            radius={3}
            pos="relative"
          >

            <Image src={santaHatImg} alt="santa_hat" w={250} pos="absolute" top={-180} left={200} style={{ zIndex: 1000}}/>

            <Title pt={42} pl={42}>About Me</Title>

            <Text style={{ whiteSpace: "break-spaces"}} size="xl" p={42}>
              {aboutMeUpdated}
            </Text>
          </Box>

          <Box
            component={motion.div}
            initial={{...cardVariants.offscreen, x: 50}}
            whileInView={{ ...cardVariants.onscreen}}
            viewport={cardVariants.viewport}
            pos="relative"
          >
            <Image
              src={profilePicture}
              alt="Profile Picture"
              borderRadius={3}
              pos="absolute"
              right={0}
              top={-240}
              w={530}
              h={530}
              style={{ zIndex: -100}}
            />
          </Box>
      </Container>



  )
}


export default About