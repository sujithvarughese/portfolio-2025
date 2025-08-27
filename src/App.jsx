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
          <div className="w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
              <Spotlight />
              <div className="px-4 py-10 md:py-20">
                <Hero form={form} handleSubmit={handleSubmit} />
                <Projects />

              </div>
            </div>
          </div>

          <Footer />
        </Flex>
      </AppShell.Main>

      <Assistant opened={opened} close={close} form={form} handleSubmit={handleSubmit} />
    </AppShell>
  )
}

export default App
