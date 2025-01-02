import { useState } from 'react'
import { AppShell, Burger, Flex } from '@mantine/core'
import Header from './navigation/Header.jsx'
import { useDisclosure } from '@mantine/hooks'
import Hero from './sections/Hero.jsx'
import SkillList from './sections/SkillList.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'

const App = () => {

  return (
    <AppShell
      header={{ height: 60 }}
      maw="1920px"
      m="auto"
    >
      <Header/>

      <AppShell.Main>
        <Flex direction="column" gap={56}>
          <Hero />
          <About />
          <Projects />
        </Flex>

      </AppShell.Main>

    </AppShell>
  )
}

export default App
