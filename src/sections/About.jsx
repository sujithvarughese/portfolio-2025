import { aboutMeUpdated } from '../data/data.js'
import profilePicture from "../assets/images/profile/hera.jpeg"
import {Box, Button, Flex, Image, Text, TextInput, Title} from '@mantine/core'
import {motion} from "motion/react";
import {IoIosSend} from "react-icons/io";


const About = ({ form, handleSubmit }) => {


  return (
      <Flex direction="column" align="center" justify="space-evenly" pos="relative" bg="white" py={84} gap={42}>
        <Box w={400} radius={3} px={16} mx="auto"  bg="white">
          <Title style={{ textAlign: "center", fontSize: 42 }}>About Me</Title>
          <Text style={{ whiteSpace: "break-spaces", textAlign: "justify", textJustify: "auto"}}>
            {aboutMeUpdated}
          </Text>
        </Box>

        <Box bg="white" p={24} w="90%" maw={550} style={{ borderRadius: 8, boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.25)"}}>
          <Text size="lg" weight={700} mb={12} ta="center">AI Assistant</Text>
          <form onSubmit={form.onSubmit(values => handleSubmit(values.query))} style={{ borderRadius: 12 }}>
            <Flex gap={12} w="100%" justify="center">
              <TextInput placeholder="What are Sujith's skills?" key={form.key('query')}{...form.getInputProps('query')} w="70%"/>
              <Button type="submit" variant="gradient" loaderProps={{ type: 'dots' }} rightSection={<IoIosSend size={20}/>} >Send</Button>
            </Flex>
          </form>
        </Box>

        <Image
          src={profilePicture}
          alt="Profile Picture"
          w="80%" maw={700}
          radius={8}
        />
      </Flex>



  )
}


export default About