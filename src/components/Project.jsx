
import { logos } from './IconPill.jsx'
import { motion } from 'motion/react'
import ProjectDrawer from './ProjectDrawer.jsx'
import { useState } from 'react'
import MobilePopUp from './MobilePopUp.jsx'
import { Anchor, Avatar, Box, Button, Flex, Image, Paper, Text, Title, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

const cardVariants = {
  offscreen: {
    y: 100,
    scale: 0.7,
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


const Project = ({
  title,
  heading,
  description,
  coverImage,
  coverGif,
  link,
  isMobile,
  github,
  captions,
  images,
  tech,
  featured
}) => {

  const [mobileAlertOpened, { open: openMobileAlert, close: closeMobileAlert }] = useDisclosure(false);
  const [projectOpened, { open: openProject, close: closeProject }] = useDisclosure(false);
  const [isHovering, setIsHovering] = useState(false)

  return (
    <>
      <ProjectDrawer
        opened={projectOpened}
        close={closeProject}
        title={title}
        description={description}
        images={images}
        captions={captions}
        link={link}
        github={github}
        tech={tech}
        isMobile={isMobile}
        openMobileAlert={openMobileAlert}
      />
      <Paper shadow="xl" py={24} px={{ base: 0, sm: 24 }} maw={850} mx="auto">
        <Flex
          component={motion.div}
          initial={cardVariants.offscreen}
          whileInView={cardVariants.onscreen}
          viewport={cardVariants.viewport}
          direction={{ base: "column", sm: "row" }}
          style={{ overflow: "hidden" }}
          align="center"
          gap={12}
          justify="space-between"
          mx="auto"
        >
          <UnstyledButton
            onClick={openProject}
            onMouseEnter={()=>setIsHovering(true)}
            onMouseLeave={()=>setIsHovering(false)}
          >
            <Image
              src={isHovering ? coverImage : coverGif} alt="project"
              w={380}
              style={{ border: isHovering ? "5px solid dodgerblue" : "", borderRadius: 3 }}
            />
          </UnstyledButton>

          <Flex direction="column" gap={12}>
            <UnstyledButton onClick={openProject}><Title order={3}>{title}</Title></UnstyledButton>
            <Text>{heading}</Text>

            <Flex gap={4} justify={{ base: "center", sm: "flex-start" }}>
              {tech.map((item, index) => <Avatar key={index} size={40} variant="transparent">{logos[item]}</Avatar>)}
            </Flex>

            <Flex gap={12} justify={{ base: "center", sm: "flex-start" }}>
              <Button component="a" variant="light" size="lg" href={github} target="_blank" rel="noreferrer">Github</Button>
              {isMobile ? <Button variant="light" size="lg" onClick={openMobileAlert}>Demo</Button> : <Button component="a" variant="light" size="lg" href={link} target="_blank" rel="noreferrer">Demo</Button>}
            </Flex>
          </Flex>

        </Flex>
      </Paper>

      <MobilePopUp opened={mobileAlertOpened} onClose={closeMobileAlert} link={link} />
    </>
  )
}


export default Project