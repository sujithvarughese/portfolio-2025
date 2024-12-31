import { useState } from 'react'
import { AppShell, Burger } from '@mantine/core'
import Header from './navigation/Header.jsx'
import { useDisclosure } from '@mantine/hooks'
import Hero from './sections/Hero.jsx'

const App = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 150,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      maw="1280px"
      m="auto"
      padding="md"
    >
      <Header opened={opened} onClick={toggle}/>

      <AppShell.Main>
        <Hero />
      </AppShell.Main>

    </AppShell>
  )
}

export default App
