
import { useState } from 'react'
import Response from './Response.jsx'
import * as React from 'react'
import useSubmit from '../../hooks/useSubmit.js'
import { Box, Button, Container, Flex, Paper, Text, Textarea, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IoIosSend } from "react-icons/io";

const Assistant = () => {

  const [query, setQuery] = useState("")
  const { response, error, loading, submitForm } = useSubmit()
  const [opened, { open, close }] = useDisclosure(false);


  const handleSubmit = () => {
    open()
    submitForm(query)
  }

  return (
    <>
      <Container
        w={{ base: "90%", sm: "80%"}}
        sx={{ justifyContent: "center", margin: "auto"}}>
        <Paper shadow="xl" p="md">
            <Title style={{ textAlign: "center" }}>AI Assistant</Title>
            <Textarea
              fullWidth
              id="outlined-controlled"
              placeholder="What are Sujith's skills?"
              label="Ask about me!"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              m={16}
            />
            <Flex justify="flex-end">
              <Button
                rightSection={<IoIosSend size="24px"/>}
                sx={{ margin: 1 }}
                onClick={handleSubmit}
              >
                Ask!
              </Button>
            </Flex>
        </Paper>
      </Container>
      <Response opened={opened} close={close} response={response} loading={loading} error={error} />
    </>

  )
}

export default Assistant