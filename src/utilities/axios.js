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
})

//		'OpenAI-Beta': 'assistants=v2'
