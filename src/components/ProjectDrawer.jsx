


import MobilePopUp from './MobilePopUp.jsx'
import { useState } from 'react'
import { Box, Container, Drawer, Flex, Image, List, Title } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
const ProjectDrawer = ({ opened, close, title, description, images, captions, link, isMobile, github, tech }) => {

  const [showMobileModal, setShowMobileModal] = useState(false)


  return (
    <Drawer
        opened={opened}
        onClose={close}
        scroll="true"
        style={{ height: "100vh" }}
    >

        <Title>{title}</Title>


        <Box display={{ xs: "none", sm: "revert" }}>
          <Text variant="body1" textAlign="justify" whiteSpace="break-spaces">{description}</Text>
        </Box>

        <Box display={{ sm: "none" }}>
          <Carousel data-bs-theme="dark">
            {images.map((image, index) => {
              return (
                <Carousel.Slide key={index}>
                  <Container>
                    <Image src={image} alt="app-image" style={{ width: "300px", height: "300px" }} />
                  </Container>
                </Carousel.Slide>
              )
            })}
          </Carousel>
        </Box>

        <Box display={{ xs: "none", sm: "revert" }}>
          <Carousel data-bs-theme="dark">
            {images.map((image, index) => {
              return (
                <Carousel.Slide key={index}>
                  <Container>
                    <Image src={image} alt="app-image" style={{ width: "300px" }} />
                  </Container>
                </Carousel.Slide>
              )
            })}
          </Carousel>
        </Box>

        <List>
          {captions.map((caption, index) =>
            <List.Item key={index}>
              <Text variant="body1">{caption}</Text>
            </List.Item>)}
        </List>

        <Flex direction="horizontal" style={{ justifyContent: "center", gap: "36px", padding: "10px" }}>

          <a href={github} target="_blank" rel="noreferrer"><Text variant="subtitle1" fontSize="20px" color="warning.main">Github</Text></a>
          {
            isMobile ?
              <>
                <Box component="button" onClick={()=>setShowMobileModal(!showMobileModal)} p={0} border="none" ><Text variant="subtitle1" fontSize="20px" color="warning.main">Demo</Text></Box>
                {showMobileModal && <MobilePopUp open={showMobileModal} onClose={() => setShowMobileModal(false)} link={link} />}
              </>
              :
              <a href={link} target="_blank" rel="noreferrer"><Text variant="subtitle1" fontSize="20px" color="warning.main">Demo</Text></a>
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