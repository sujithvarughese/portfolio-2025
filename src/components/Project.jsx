
import { logos } from './IconPill.jsx'
import { motion } from 'motion/react'
import ProjectDrawer from './ProjectDrawer.jsx'
import { useState } from 'react'
import MobilePopUp from './MobilePopUp.jsx'
import { Anchor, Avatar, Box, Button, Flex, Image, Text, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

const cardVariants = {
  offscreen: {
    y: 100,
    scale: 0.3,
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
  coverVideo,
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
      <Flex
        component={motion.div}
        initial={cardVariants.offscreen}
        whileInView={cardVariants.onscreen}
        viewport={cardVariants.viewport}
        direction={{ base: "column", md: "row" }}
        style={{ overflow: "hidden" }}
      >
        <UnstyledButton
          onClick={openProject}
          onMouseEnter={()=>setIsHovering(true)}
          onMouseLeave={()=>setIsHovering(false)}
        >
          <Image
            src={isHovering ? coverImage : coverGif} alt="project"
            w={420}
            style={{ border: isHovering ? "5px solid #ED6C02" : "", borderRadius: 3 }}
          />
        </UnstyledButton>

        <Box>
          <Button onClick={openProject}>{title}</Button>
          <Text>{heading}</Text>

          <Flex gap={1}>
            {tech.map((item, index) => <Avatar key={index}>{logos[item]}</Avatar>)}
          </Flex>


          <Flex gap={12}>
            <Button component="a" href={github} target="_blank" rel="noreferrer">Github</Button>
            {isMobile ?
              <Button onClick={openMobileAlert}>Demo</Button>
              :
              <Button component="a" href={link} target="_blank" rel="noreferrer">Demo</Button>
            }
          </Flex>

        </Box>

      </Flex>
      <MobilePopUp opened={mobileAlertOpened} onClose={closeMobileAlert} link={link} />
    </>
  )
}


export default Project