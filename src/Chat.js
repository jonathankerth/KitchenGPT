import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios with `npm install axios`
import "./Chat.css";

function Chat() {
	const [message, setMessage] = useState("");
	const [chatHistory, setChatHistory] = useState([]);

	// Predefined prompts
	const prompts = [
		"What can I make with ",
		"How do I make ",
		"What can I use instead of eggs in ",
		"How can I make a vegan version of ?",
		"How do I chop an onion without crying?",
	];

	const sendMessage = async (event) => {
		event.preventDefault();

		// Send the message to your backend server
		const response = await axios.post("http://localhost:1234/chat", {
			message,
		});

		// Update the chat history with the new message and response
		setChatHistory([
			...chatHistory,
			{ message: message, response: response.data },
		]);
		setMessage(""); // Clear the input field after sending the message
	};

	const selectPrompt = (event) => {
		setMessage(event.target.value);
	};

	return (
		<div className="chat-container">
			<form onSubmit={sendMessage}>
				<select className="prompt-select" onChange={selectPrompt}>
					<option>Select a prompt</option>
					{prompts.map((prompt, index) => (
						<option key={index} value={prompt}>
							{prompt}
						</option>
					))}
				</select>
				<input
					type="text"
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					className="message-input"
				/>
				<button type="submit" className="send-button">
					Send
				</button>
			</form>
			<div className="chat-history">
				{chatHistory.map((chat, index) => (
					<div key={index}>
						<p>You: {chat.message}</p>
						<p>ChatGPT: {chat.response}</p>
					</div>
				))}
			</div>
		</div>
	);
}
export default Chat;
