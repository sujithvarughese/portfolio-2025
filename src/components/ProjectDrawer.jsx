import { useState } from 'react'
import {Anchor, Button, Container, Drawer, Flex, Image, List, Text, Title} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { LiaGithub, LiaRocketSolid } from "react-icons/lia";
import {FaAppStore} from "react-icons/fa";

const ProjectDrawer = ({ opened, close, title, description, images, captions, link, appStore, isMobile, github, tech, openMobileAlert }) => {

  return (
    <Drawer opened={opened} onClose={close}>
      <Title>{title}</Title>
      <Text my={16} style={{ textAlign: "justify", whiteSpace: "break-spaces" }}>{description}</Text>

      <Carousel withIndicators height={640}>
        {images.map((image, index) =>
          <Carousel.Slide key={index}>
            <Image src={image} alt="app-image" height="100%"/>
          </Carousel.Slide>
        )}
      </Carousel>

      <List my={16} mr={16}>
        {captions.map((caption, index) =>
          <List.Item key={index}>
            <Text variant="body1">{caption}</Text>
          </List.Item>)}
      </List>

        <Flex justify="center" gap={16}>
          <Button component="a" href={github} target="_blank" rel="noreferrer" leftSection={<LiaGithub size={22} />}>Github</Button>
          {link &&
          <>
            {isMobile ?
              <Button onClick={openMobileAlert} leftSection={<LiaRocketSolid size={22}/>}>Demo</Button>
              :
              <Button component="a" href={link} target="_blank" rel="noreferrer" leftSection={<LiaRocketSolid size={22} />}>Demo</Button>
            }
          </>
          }
          {appStore &&
            <Button
              component={Anchor}
              href={appStore}
              target="_blank"
              leftSection={<FaAppStore size={24}/>}
            >App Store
            </Button>
          }

        </Flex>
    </Drawer>
  )
}

export default ProjectDrawer