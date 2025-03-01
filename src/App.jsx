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
    <AppShell m="auto">
      <Header open={open}/>

      <AppShell.Main>
        <Flex direction="column" pos="relative">
          <Hero />
          <About />
          <Projects />
          <Footer />
        </Flex>
      </AppShell.Main>

      <Assistant opened={opened} close={close} />
    </AppShell>
  )
}

export default App
