import axios from "axios";

const API_KEY = import.meta.env.VITE_OPEN_AI_KEY;

export const openai = axios.create({
	baseURL: 'https://api.openai.com/v1',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${API_KEY}`,
		'OpenAI-Beta': 'assistants=v2'
	},
});


