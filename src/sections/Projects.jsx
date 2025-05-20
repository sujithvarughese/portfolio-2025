
import { projects } from '../data/projects.js'
import Project from "../components/Project.jsx"
import { motion } from 'motion/react'
import { Box, Container, Flex, Text, Title } from '@mantine/core'

const Projects = () => {
  return (

    <Box id="projects" bg="white">
      <Title style={{ textAlign: "center", fontSize: 42 }} p={32}>Projects</Title>
      <Flex direction="column" gap={36} align="center" m={16}>
        {projects.map(project => <Project key={project.title} {...project} />)}
      </Flex>
    </Box>




  )
}

export default Projects