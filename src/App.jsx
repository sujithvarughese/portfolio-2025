import { useState } from 'react'
import { AppShell, Box, Burger, Flex } from '@mantine/core'
import Header from './navigation/Header.jsx'
import { useDisclosure } from '@mantine/hooks'
import Hero from './sections/Hero.jsx'
import SkillList from './sections/SkillList.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Footer from './sections/Footer.jsx'
import Assistant from './components/assistant/Assistant.jsx'
import AssistantButton from './components/assistant/AssistantButton.jsx'

const App = () => {

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 60 }}
      m="auto"
    >
      <Header/>

      <AppShell.Main>
        <Flex direction="column" gap={56} pos="relative">
          <Hero />
          <About />
          <Projects />
          <Footer />
        </Flex>
        <Assistant opened={opened} close={close} />

        <AppShell.Footer>
          <Flex justify="flex-end" p={6}>
            <AssistantButton open={open}/>
          </Flex>
        </AppShell.Footer>


      </AppShell.Main>

    </AppShell>
  )
}

export default App
