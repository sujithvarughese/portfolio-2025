import { motion } from "motion/react"
import { fullName, bio } from '../data/data.js'
import React, { useEffect, useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import {Anchor, Box, Button, Flex, Image, Text, TextInput, Title} from '@mantine/core'
import {AnimatedTestimonials} from "../components/ui/animated-testimonials.js";
import { heroImages } from "../data/data.js";
import {IoIosSend} from "react-icons/io";
import resume from "../assets/images/varughese_resume.pdf"
import {LampContainer} from "../components/ui/lamp.js";
import {HeroForm} from "../components/assistant/HeroForm.jsx";
const emailAddress = "sujith.varug@gmail.com"

const Hero = ({ form, handleSubmit }) => {


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
    <LampContainer className="md:flex items-center justify-center gap-10 pt-64 sm:p-0">
      <Flex direction={{ base: "column", sm: "row" }} justify="center" align="center" className="">
        <Flex direction="column" justify="center" align="center" className="w-full">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 sm:py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Sujith Varughese
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-xl text-center text-lg font-normal text-white dark:text-neutral-400"
          >
            {currentIntroductionText}
          </motion.p>
          <Flex justify="center" align="center">
            <motion.div
              initial={{ opacity: 0, y: -1000 }}
              animate={{
                opacity: 1, y: 0, x: 0,
                transition: { delay: 2, type: "spring", damping: 350, mass: 0.2, stiffness: 250  }
              }}
              className="relative z-10 mx-auto max-w-xl text-center text-lg font-normal text-white dark:text-neutral-400"
            >
              <IoLocationSharp fontSize={28} color="white"/>
            </motion.div>
            <motion.p style={{ color: "white"}}>{currentLocationText}</motion.p>
          </Flex>
          <HeroForm form={form} handleSubmit={handleSubmit}/>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href={`mailto:${emailAddress}`}  className="w-60 transform cursor-pointer rounded-lg text-center font-bold bg-green-500 px-6 py-6 mt-6 sm:mt-0 text-white transition-all duration-300 hover:bg-green-800">
              Contact me
            </a>
            <Flex justify="space-around" w="100%" display={{ base: "none", sm: "flex" }}>
              <Flex direction="column">
                <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718361/diploma_mv2evg.png" target="_blank" rel="noreferrer">Bachelor's Diploma</Anchor>
                <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747725035/CompTIA_A_ce_certificate_tfbzb8.png" target="_blank" rel="noreferrer">CompTIA A+</Anchor>
                <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747725095/Meta_front_end_certificate-_Coursera_eeuipu.png" target="_blank" rel="noreferrer">Meta Front End Developer</Anchor>
                <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718364/accounting_certificate_ff7vvg.png" target="_blank" rel="noreferrer">Accounting Technology</Anchor>
                <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718364/business_management_cert_kmza3i.png" target="_blank" rel="noreferrer">Business Management</Anchor>
              </Flex>
              {/*<Box>
                <Flex direction="column">
                  <Anchor href={resume} target="_blank" rel="noreferrer">Resumé</Anchor>
                  <Anchor href="https://www.linkedin.com/in/sujithvarughese/" target="_blank" rel="noreferrer">LinkedIn</Anchor>
                  <Anchor href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer">GitHub</Anchor>
                </Flex>
              </Box>*/}
            </Flex>
          </motion.div>
        </Flex>
        <AnimatedTestimonials testimonials={heroImages} />

      </Flex>

    </LampContainer>
  )
}

export default Hero


