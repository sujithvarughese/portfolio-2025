import axios from "axios";

const API_KEY = import.meta.env.VITE_OPEN_AI_KEY;

export const openai = axios.create({
	baseURL: 'https://api.openai.com/v1',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${API_KEY}`,

	},
});

export const openAiStream = axios.create({
	baseURL: 'https://api.openai.com/v1',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${API_KEY}`,
	},
	method: 'POST',
	responseType: 'stream',
	onDownloadProgress: progressEvent => {
		const sse = new EventSource('https://api.openai.com/v1/responses')
		console.log(sse)
		const xhr = progressEvent.event.target
		const { responseText } = xhr
		console.log("=====responseText======")
	}
})

//		'OpenAI-Beta': 'assistants=v2'
