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
import { Anchor, Box, Flex, Text } from '@mantine/core'

const Hero = forwardRef((props, ref) => {


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
    <Box
      as="section"
      id="home"
      ref={ref}

      marginX={{ xs: 1, lg: 12 }}
    >
      <Flex
        flexDirection="row"
        position="relative"
        alignItems="center"
      >
        <Box
          width={{ xs: 320, md: 480 }}
          height={{ xs: 320, md: 480 }}
          bgcolor='warning.main'
          py={{xs: 4, md: 16}}
          px={2}
          borderRadius={2}
          position="absolute"
          bottom={{ xs: 24, sm: "revert" }}
          //borderTop="black 8px solid"
          //borderBottom="black 8px solid"
          sx={{  backgroundImage:`url(${christmasBg})`, backgroundSize: "cover", backgroundPosition: "right"}}
        >

          <Text fontSize={{ xs: 28, md: 48 }} fontWeight={700}>{currentNameText}</Text>
          <Text variant="h5" fontWeight={600} whiteSpace="break-spaces" py={1}>{currentIntroductionText}</Text>

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

          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1.4 } }}
            padding={1}
          >
            <Anchor href={diploma}  target="_blank" rel="noreferrer" underline="none">
              <Text color="black" sx={{ "&:hover": { color: "white" }}}>Bachelor of Computer Science, 2022</Text>
            </Anchor>
            <Anchor href={compTiaCert} target="_blank" rel="noreferrer" underline="none">
              <Text color="black" sx={{ "&:hover": { color: "white" }}}>CompTIA A+ Certified</Text>
            </Anchor>
            <Anchor href={metaCert} target="_blank" rel="noreferrer" underline="none">
              <Text color="black" sx={{ "&:hover": { color: "white" }}}>Meta Front End Developer Certified</Text>
            </Anchor>
          </Box>

        </Box>

        <Box display="flex" justifyContent="center">
          <Box component="img" src={profilePicture2} alt="Profile Picture"
               width="90%"
               display={{ xs: "none", sm: "initial" }}
               zIndex={-10}
               borderRadius={2}
          />
          <Box component="img" src={profilePictureMobile} alt="Profile Picture"
               display={{ sm: "none" }}
               zIndex={-10}
               borderRadius={2}
          />

        </Box>
      </Flex>
      <Assistant />
      <Skills />

    </Box>
  )
})

export default Hero
