
const prod = {
  url: {
    API_URL: import.meta.env.VITE_API_URL
  }
}

const dev = {
  url : {
    API_URL: "http://localhost:8800/api/v1/assistant"
  }
}

export const config =
  process.env.NODE_ENV === "development" ? dev : prod
