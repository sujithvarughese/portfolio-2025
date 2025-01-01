import { useState } from 'react'
import { AppShell, Burger } from '@mantine/core'
import Header from './navigation/Header.jsx'
import { useDisclosure } from '@mantine/hooks'
import Hero from './sections/Hero.jsx'

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
      </AppShell.Main>

    </AppShell>
  )
}

export default App
