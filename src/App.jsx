import { useState } from 'react'
import { AppShell, Burger } from '@mantine/core'
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
      maw="1280px"
      m="auto"
      padding="md"
    >
      <Header/>

      <AppShell.Main>
        <Hero />
        <SkillList />
        <About />
        <Projects />
      </AppShell.Main>

    </AppShell>
  )
}

export default App
