import { motion } from "motion/react"
import { fullName, bio } from '../data/data.js'
import { useEffect, useState } from 'react'
import profilePicture2 from "../assets/images/profile/profile.png"
import { IoLocationSharp } from "react-icons/io5";
import profilePictureMobile from "../assets/images/profile/profile-small.png"
import { Flex, Image, Text, Title } from '@mantine/core'

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

    <Flex direction="column" align="center" justify="space-evenly" h="100vh" bg="black" pos="sticky" top={0} style={{ zIndex: -100 }}>
      <Flex justify="center">
        <Image src={profilePicture2} w="80%" maw={1400} m="auto" radius={2} display={{ base: "none", xs: "initial"}} />
        <Image src={profilePictureMobile} w="70%" maw={350} m="auto" radius={2} display={{ xs: "none"}} />
      </Flex>

      <Flex direction="column" align="center" h={125} mt={{ base: -50, sm: 0 }}>
        <Title c="white" style={{ fontSize: 42 }}>{currentNameText}</Title>
        <Title c="white" order={2}>{currentIntroductionText}</Title>
        <Flex justify="center" align="center">
          <motion.div
            initial={{ opacity: 0, y: -1000 }}
            animate={{
              opacity: 1, y: 0, x: 0,
              transition: { delay: 2, type: "spring", damp: 350, mass: 0.2, stiffness: 250  }
            }}
          >
            <IoLocationSharp fontSize={28} color="white"/>
          </motion.div>
          <Text c="white" >{currentLocationText}</Text>
        </Flex>
      </Flex>
    </Flex>


  )
}

export default Hero
