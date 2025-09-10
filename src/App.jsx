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
import { useForm } from '@mantine/form';
import {addMessageToChat, fetchAiStream} from "./features/assistantSlice.js";
import {useDispatch} from "react-redux";
import {Spotlight} from "./components/ui/spotlight-new";
import {Navbar} from "./navigation/Navbar.js";

const App = () => {

  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch()

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      query: '',
    }
  });

  const handleSubmit = async (query) => {
    if (!query) {
      return
    }
    if (!opened) {
      open()
    }
    dispatch(addMessageToChat({ sender: "user", message: query}))
    dispatch(fetchAiStream(query))
    form.reset()
  }


  return (
    <Box m="auto" maw={1920}>
      <Navbar open={open} />

      <main className="w-full items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">


          <Spotlight />

          <Hero form={form} handleSubmit={handleSubmit} />
          <Projects />




      </main>
      <Footer />


      <Assistant opened={opened} close={close} form={form} handleSubmit={handleSubmit} />
    </Box>
  )
}

export default App
