import { useState } from 'react'
import { assistantAPI, getOpenAIResponse } from '../utilities/axios.js'

const method = "POST"
const url = "/thread"

const useSubmit = () => {

  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const submitForm = async (prompt) => {
    setResponse(null)
    setError("")
    setLoading(true)
    try {
      const res = await getOpenAIResponse(prompt)
      setResponse(res)
      return true
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { response, error, loading, submitForm }
}

export default useSubmit