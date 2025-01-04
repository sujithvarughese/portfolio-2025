import { useState } from 'react'
import { Button, Container, Drawer, Flex, Image, List, Text, Title } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
const ProjectDrawer = ({ opened, close, title, description, images, captions, link, isMobile, github, tech, openMobileAlert }) => {

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

      <List my={16}>
        {captions.map((caption, index) =>
          <List.Item key={index}>
            <Text variant="body1">{caption}</Text>
          </List.Item>)}
      </List>

        <Flex justify="center" gap={16}>
          <Button component="a" href={github} target="_blank" rel="noreferrer">Github</Button>
          {isMobile ?
            <Button onClick={openMobileAlert}>Demo</Button>
            :
            <Button component="a" href={link} target="_blank" rel="noreferrer">Demo</Button>
          }
        </Flex>
    </Drawer>
  )
}

export default ProjectDrawer