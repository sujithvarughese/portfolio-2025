// axios
import axios from "axios";
import { config } from "./constants.js";

const API_KEY = import.meta.env.VITE_OPEN_AI_KEY;
export const openai = axios.create({
	baseURL: 'https://api.openai.com/v1',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${API_KEY}`,
		'OpenAI-Beta': 'assistants=v2'
	},
});

export const getOpenAIResponse = async (prompt) => {
	let run = await openai.post('/threads/runs', {
		assistant_id: ASSISTANT_KEY,
		thread: {
			messages: [{ role: "user", content: prompt }]
		}
	});
	const threadId = run.data.thread_id
	const runId = run.data.id
	while (run.data.status !== "completed") {
		run = await openai.get(`/threads/${threadId}/runs/${runId}`)
		console.log(run.data.status)
	}
	console.log(run.data.status)
	if (run.data.status === 'completed') {
		const messages = await openai.get(`/threads/${threadId}/messages`)
		openai.delete(`https://api.openai.com/v1/threads/${threadId}`)
		return messages.data.data[0].content[0].text.value.replace(/\【.*?】/g, '')
		//return message[message.length - 2] === "】" ? message.substring(0, message.length - 13).concat(".") : message
	} else {
		console.log(run.status);
	}
};



