
import { projects } from '../data/projects.js'
import Project from "../components/Project.jsx"
import { motion } from 'motion/react'
import { Box, Container, Flex, Text, Title } from '@mantine/core'

const Projects = () => {
  return (

    <Box id="projects" px={{ base: 4, sm: 0 }} bg="white">
      <Title style={{ textAlign: "center" }}>Work</Title>
      <Flex direction="column" gap={42} justify="space-between">
        {projects.map(project => <Project key={project.title} {...project} />)}
      </Flex>
    </Box>




  )
}

export default Projects