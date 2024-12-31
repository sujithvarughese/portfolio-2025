
import { useState } from 'react'
import Response from './Response.jsx'
import * as React from 'react'
import useSubmit from '../../hooks/useSubmit.js'
import { Box, Button, Paper, Text, Textarea } from '@mantine/core'
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
      <Box
        width={{ xs: "90%", sm: "80%", md: "50%"}}
        sx={{ justifyContent: "center", margin: "auto"}}>
        <Paper elevation={6}>
          <Box
            sx={{ margin: 2, padding: 2, justifyContent: "center", alignItems: "center", gap: 1 }}>
            <Text variant="h5">AI Assistant</Text>
            <Textarea
              fullWidth
              id="outlined-controlled"
              placeholder="What are Sujith's skills?"
              label="Ask about me!"
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Box sx={{ alignSelf: "flex-end"}}>
              <Button
                variant="contained"
                size="small"
                endIcon={<IoIosSend />}
                sx={{ margin: 1 }}
                onClick={handleSubmit}
              >
                Ask!
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Response opened={opened} close={close} response={response} loading={loading} error={error} />
    </>

  )
}

export default Assistant