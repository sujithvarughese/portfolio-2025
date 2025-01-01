import { motion } from "motion/react"
import { introductionText, descriptionText, fullName, bio, aboutMeUpdated } from '../data/data.js'
import { forwardRef, useEffect, useState } from 'react'
import profilePicture2 from "../assets/images/profile/profile.png"
import { IoLocationSharp } from "react-icons/io5";
import profilePictureMobile from "../assets/images/profile/profile-small.png"
import Skills from '../components/Skills.jsx'
import christmasBg from "../assets/images/backgrounds/christmas.jpg"
import diploma from "../assets/images/certificates/diploma.png"
import compTiaCert from "../assets/images/certificates/compTIA_cert.pdf"
import metaCert from "../assets/images/certificates/meta_frontend_cert.pdf"
import Assistant from '../components/assistant/Assistant.jsx'
import { Anchor, BackgroundImage, Box, Container, Flex, Image, Text, Title } from '@mantine/core'

const Hero = () => {


  const [currentNameText, setCurrentNameText] = useState("")
  const [currentIntroductionText, setCurrentIntroductionText] = useState("")
  const [currentLocationText, setCurrentLocationText] = useState("")


  const updateWord = (word, currentWord) => {
    if (word.length === currentWord.length) {
      return currentWord
    }
    return word.substring(0, currentWord.length + 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentNameText !== fullName) {
        const updatedWord = updateWord(fullName, currentNameText)
        setCurrentNameText(updatedWord)
      } else if (currentIntroductionText !== bio) {
        const updatedWord = updateWord(bio, currentIntroductionText)
        setCurrentIntroductionText(updatedWord)
      } else if (currentLocationText !== "Miami, FL") {
        const updatedWord = updateWord("Miami, FL", currentLocationText)
        setCurrentLocationText(updatedWord)
      }
    }, 45)
    return () => clearTimeout(timer)
  }, [currentNameText, currentIntroductionText, currentLocationText])


  return (
    <Box as="section" marginX={{ xs: 1, lg: 12 }} pos="relative" px={24}>
      <BackgroundImage
        src={christmasBg}
        radius="md"
        pos="absolute"
        top={75}
        left={0}
        pl={72}
        pt={102}
        w={{ base: 320, md: 420 }}
        h={{ base: 320, md: 420 }}
        style={{ backgroundSize: "cover", backgroundPosition: "left"}}
      >
        <Title style={{ fontSize: 42}}>{currentNameText}</Title>
        <Title order={2}  whiteSpace="break-spaces" py={1}>{currentIntroductionText}</Title>

        <Flex flexDirection="row" >
          <motion.div
            initial={{ opacity: 0, y: -1000, x: -50 }}
            animate={{
              opacity: 1, y: 0, x: 0,
              transition: { delay: 2, type: "spring", damp: 350, mass: 0.2, stiffness: 250  }
            }}
          >
            <IoLocationSharp fontSize={28}/>
          </motion.div>
          <Text variant="h6">{currentLocationText}</Text>
        </Flex>

        <Flex
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1.4 } }}
          padding={1}
          direction="column"
        >
          <Anchor href={diploma}  target="_blank" rel="noreferrer" underline="hover" c="white" style={{ fontWeight: 600}}>
            Bachelor of Computer Science, 2022
          </Anchor>
          <Anchor href={compTiaCert} target="_blank" rel="noreferrer" underline="hover" c="white" style={{ fontWeight: 600}}>
            CompTIA A+ Certified
          </Anchor>
          <Anchor href={metaCert} target="_blank" rel="noreferrer" underline="hover" c="white" style={{ fontWeight: 600}}>
            Meta Front End Developer Certified
          </Anchor>
        </Flex>
      </BackgroundImage>





        <Image src={profilePicture2} alt="Profile Picture"
             display={{ xs: "none", sm: "initial" }}
             zIndex={-10}
             borderRadius={2}
        />
        <Image src={profilePictureMobile} alt="Profile Picture"
             display={{ sm: "none" }}
             zIndex={-10}
             borderRadius={2}
        />


      <Assistant />
      <Skills />

    </Box>
  )
}

export default Hero
