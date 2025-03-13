
import { logos } from './IconPill.jsx'
import { motion } from 'motion/react'
import ProjectDrawer from './ProjectDrawer.jsx'
import { useState } from 'react'
import MobilePopUp from './MobilePopUp.jsx'
import {Anchor, Avatar, Button, Flex, Image, Paper, Text, Title, Tooltip, UnstyledButton} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { LiaGithub, LiaRocketSolid } from "react-icons/lia";
import { FaAppStore } from "react-icons/fa";

const cardVariants = {
  offscreen: {
    y: 100,
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
      <Paper
        component={motion.div}
        initial={cardVariants.offscreen}
        whileInView={cardVariants.onscreen}
        viewport={cardVariants.viewport}
        whileHover={{ scale: 1.05 }}
        py={24} radius={8} px={{ base: 12, sm: 36 }} maw={850} mx="auto"
        style={{ borderRadius: 8, boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)"}}
      >
        <Flex
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
              display={{ base: "none", sm: "initial" }}
              w={{ base: 240, sm: 340 }}
              mah={{ base: 240, sm: 340 }}
              style={{ border: isHovering ? "5px solid dodgerblue" : "", borderRadius: 3 }}
            />
            <Image
                src={coverImage} alt="project"
                display={{ sm: "none" }}
                w={{ base: 240, sm: 340 }}
                mah={{ base: 240, sm: 340 }}
                style={{ border: isHovering ? "5px solid dodgerblue" : "", borderRadius: 3 }}
            />
          </UnstyledButton>

          <Flex direction="column" gap={12}>
            <UnstyledButton onClick={openProject}><Title order={2}>{title}</Title></UnstyledButton>
            <Text size="lg">{heading}</Text>

            <Flex gap={4} justify={{ base: "center", sm: "flex-start" }}>
              {tech.map((item, index) => <Tooltip label={item} key={index} ><Avatar size={40} variant="transparent">{logos[item]}</Avatar></Tooltip>)}
            </Flex>

            <Flex gap={12} justify={{ base: "center", sm: "flex-start" }} wrap="wrap">
              <Button
                component="a"
                variant="light"
                size="lg"
                href={github}
                target="_blank"
                rel="noreferrer"
                leftSection={<LiaGithub size={24} />}
              >Github
              </Button>
              {isMobile ?
              <Button variant="light" size="lg" onClick={openMobileAlert} leftSection={<LiaRocketSolid size={24}/>}>Demo</Button>
              :
              <Button component="a" variant="light" size="lg" href={link} target="_blank" rel="noreferrer" leftSection={<LiaRocketSolid size={24} /> }>Demo</Button>
              }
              {title === "Trivia Night AI" &&
              <Button
                component={Anchor}
                href="https://apps.apple.com/us/app/trivia-night-ai/id6741895843"
                variant="light" size="lg"
                target="_blank"
                leftSection={<FaAppStore size={24}/>}
              >App Store
              </Button>
              }
            </Flex>
          </Flex>

        </Flex>
      </Paper>

      <MobilePopUp opened={mobileAlertOpened} onClose={closeMobileAlert} link={link} />
    </>
  )
}


export default Project