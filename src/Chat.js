import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Chat.css";

function Chat() {
	const [message, setMessage] = useState("");
	const [chatHistory, setChatHistory] = useState([]);
	const [isResponseLoading, setResponseLoading] = useState(false);
	const inputRef = useRef(null); // Create a reference to the textarea

	const prompts = [
		"What can I make with ",
		"How do I make ",
		"What can I use instead of eggs in ",
		"How can I make a vegan version of ?",
		"How do I chop an onion without crying?",
	];

	const sendMessage = async (event) => {
		event.preventDefault();

		setResponseLoading(true);

		const response = await axios.post("https://kitchengpt.herokuapp.com/chat", {
			message,
		});

		setChatHistory([
			...chatHistory,
			{ message: message, response: response.data },
		]);
		setMessage("");
		setResponseLoading(false);
	};

	const selectPrompt = (event) => {
		setMessage(event.target.value);
	};

	// Update the height of the textarea when the message state changes
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.style.height = "auto";
			inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
		}
	}, [message]);

	return (
		<div className="chat-container">
			<form onSubmit={sendMessage}>
				<select
					className="prompt-select"
					onChange={selectPrompt}
					onKeyPress={(event) => {
						if (event.key === "Enter") event.preventDefault();
					}}
				>
					<option>Select a prompt</option>
					{prompts.map((prompt, index) => (
						<option key={index} value={prompt}>
							{prompt}
						</option>
					))}
				</select>
				<textarea
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					className="message-input"
					ref={inputRef}
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
				{isResponseLoading && (
					<div className="message chatgpt">
						<p>You: {message}</p>
						<p>ChatGPT: Response loading...</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default Chat;
