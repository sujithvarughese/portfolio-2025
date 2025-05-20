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
    <AppShell m="auto">
      <Header open={open}/>

      <AppShell.Main>
        <Flex direction="column" pos="relative">
          <Hero />
          <About form={form} handleSubmit={handleSubmit} />
          <Projects />
          <Footer />
        </Flex>
      </AppShell.Main>

      <Assistant opened={opened} close={close} form={form} handleSubmit={handleSubmit} />
    </AppShell>
  )
}

export default App
