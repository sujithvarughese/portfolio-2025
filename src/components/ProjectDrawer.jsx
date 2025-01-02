


import MobilePopUp from './MobilePopUp.jsx'
import { useState } from 'react'
import { Box, Button, Container, Drawer, Flex, Image, List, Text, Title } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
const ProjectDrawer = ({ opened, close, title, description, images, captions, link, isMobile, github, tech, openMobileAlert }) => {

  const [showMobileModal, setShowMobileModal] = useState(false)


  return (
    <Drawer opened={opened} onClose={close}>
      <Title>{title}</Title>
      <Text style={{ textAlign: "justify", whiteSpace: "break-spaces" }}>{description}</Text>


      <Carousel data-bs-theme="dark">
        {images.map((image, index) => {
          return (
            <Carousel.Slide key={index}>
              <Container>
                <Image src={image} alt="app-image" />
              </Container>
            </Carousel.Slide>
          )
        })}
      </Carousel>


      <List>
        {captions.map((caption, index) =>
          <List.Item key={index}>
            <Text variant="body1">{caption}</Text>
          </List.Item>)}
      </List>

        <Flex gap={12}>
          <Button component="a" href={github} target="_blank" rel="noreferrer">Github</Button>
          {isMobile ?
            <Button onClick={openMobileAlert}>Demo</Button>
            :
            <Button component="a" href={link} target="_blank" rel="noreferrer">Demo</Button>
          }
        </Flex>
        {/*
        <Container>
          {tech.map((item, index) => <Icon key={index} name={item}/>)}
        </Container>
        */}

    </Drawer>
  )
}

export default ProjectDrawer

/*
{
          (index === 0 || index === 1 || index === 2) ?

            <PhoneImageContainer images={images}/>
            :
            <DesktopMobileImageContainer desktop={desktop} mobile={mobile} />
        }
 */