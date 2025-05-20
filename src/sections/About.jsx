import { aboutMeUpdated } from '../data/data.js'
import {Box, Button, Flex, Image, Text, TextInput, Title} from '@mantine/core'
import {motion} from "motion/react";
import {IoIosSend} from "react-icons/io";
import AboutHeading from "../components/AboutHeading.jsx";

const About = ({ form, handleSubmit }) => {

  const cardVariants = {
    offscreen: {
      y: 50,
      scale: 0.8,
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
      <Flex direction="column" align="center" justify="space-evenly" pos="relative" bg="white" py={104} gap={42}>
        <Title ta="center" fz={42} pb={{ sm: 36 }}>About Me</Title>
        <Flex direction="column" radius={3} px={16} mx="auto" align="center" gap={{ base: 36, sm: 96 }}>
          <AboutHeading />

          <Box bg="white" p={24} w="90%" maw={550} style={{ borderRadius: 8, boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.25)"}}>
            <Text size="lg" weight={700} mb={12} ta="center">AI Assistant</Text>
            <form onSubmit={form.onSubmit(values => handleSubmit(values.query))} style={{ borderRadius: 12 }}>
              <Flex gap={12} w="100%" justify="center">
                <TextInput placeholder="What are Sujith's skills?" key={form.key('query')}{...form.getInputProps('query')} w="70%"/>
                <Button type="submit" variant="gradient" loaderProps={{ type: 'dots' }} rightSection={<IoIosSend size={20}/>} >Send</Button>
              </Flex>
            </form>
          </Box>

          <Flex display={{ base: "none", sm: "flex" }} align="center" maw={1200}>
            <Flex
              component={motion.div}
              initial={{ ...cardVariants.offscreen, x: -50 }}
              whileInView={{ ...cardVariants.onscreen, x: 25 }}
              viewport={cardVariants.viewport}
              style={{ borderRadius: 8, boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)", zIndex: 1}}
              p="xl" bg="orange.5" mih={400} justify="center" align="center" w="50%"
            >
              <Text style={{ whiteSpace: "break-spaces", textAlign: "justify", textJustify: "auto"}}>
                {aboutMeUpdated}
              </Text>
            </Flex>

            <Box
              component={motion.div}
              initial={{...cardVariants.offscreen, x: 50}}
              whileInView={{ ...cardVariants.onscreen, x: -25 }}
              viewport={cardVariants.viewport}
              style={{ borderRadius: 8, boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)", zIndex: 0}}
              w="50%"
            >
              <Image
                src="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718379/hera_sbp9lo.jpg"
                alt="Profile Picture"
                radius={8}
              />
            </Box>
          </Flex>

          <Flex display={{ sm: "none" }} direction="column" align="center" maw={900}>
            <Box
              component={motion.div}
              initial={{ ...cardVariants.offscreen, x: -50 }}
              whileInView={{ ...cardVariants.onscreen, y: 15 }}
              viewport={cardVariants.viewport}
              style={{ borderRadius: 8, boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)", zIndex: 1}}
              p="xl" bg="orange.5"
            >
              <Text style={{ whiteSpace: "break-spaces", textAlign: "justify", textJustify: "auto"}}>
                {aboutMeUpdated}
              </Text>
            </Box>

            <Box
              component={motion.div}
              initial={{...cardVariants.offscreen, x: 50}}
              whileInView={{ ...cardVariants.onscreen, y: -15 }}
              viewport={cardVariants.viewport}
              style={{ borderRadius: 8, boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)", zIndex: 0}}
              w="90%"
            >
              <Image
                src="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718379/hera_sbp9lo.jpg"
                alt="Profile Picture"
                radius={8}
              />
            </Box>
          </Flex>

        </Flex>


      </Flex>



  )
}


export default About