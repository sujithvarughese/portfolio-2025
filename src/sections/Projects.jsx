
import { projects } from '../data/projects.js'
import Project from "../components/Project.jsx"
import { motion } from 'motion/react'
import { Box, Container, Flex, Text, Title } from '@mantine/core'

const Projects = () => {
  return (

    <Box id="projects" p={12}>
      <Title style={{ textAlign: "center" }}>The Work</Title>
      <Flex direction="column" gap={16}>
        {projects.map(project => <Project key={project.title} {...project} />)}
      </Flex>
    </Box>




  )
}

export default Projects