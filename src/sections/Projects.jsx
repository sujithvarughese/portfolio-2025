
import { projects } from '../data/projects.js'
import Project from "../components/Project.jsx"
import { motion } from 'motion/react'
import { Box, Container, Text } from '@mantine/core'

const Projects = () => {
  return (
    <>
      <Container
        component={motion.section}
        id="projects"
        sx={{ display: { sm: "none" }}}
        initial={{ y: 200 }}
        whileInView={{ y: 0}}
        transition={{ ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Text variant="h4" textAlign="center" sx={{ marginBottom: 12 }}>Projects</Text>
        <Box gap={{ xs: 8, md: 16 }}>
          {projects.map(project => <Project key={project.title} {...project} />)}
        </Box>
      </Container>

      <Container
        component={motion.section}
        id="projects"
        sx={{ display: { xs: "none", sm: "revert" } }}
        initial={{ y: 200 }}
        whileInView={{ y: 0}}
        transition={{ ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Text variant="h3" textAlign="center" sx={{ marginBottom: 12 }}>Projects</Text>

        <Box gap={{ xs: 8, md: 16 }}>
          {projects.map(project => <Project key={project.title} {...project} />)}
        </Box>

      </Container>
    </>

  )
}

export default Projects