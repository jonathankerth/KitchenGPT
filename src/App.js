import React from "react";
import Chat from "./components/Chat.js";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>KitchenGPT</h1>
				<p>Your personal cooking assistant</p>
			</header>
			<main className="App-main">
				<Chat />
			</main>
			<footer className="App-footer">
				<div className="footer-content">
					<p>
						Made by{" "}
						<a
							href="https://jonathankerth.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Jonathan Kerth
						</a>
					</p>
					<p>
						Connect with me on socials:{" "}
						<a
							href="https://www.threads.net/@jonathankerth"
							target="_blank"
							rel="noopener noreferrer"
						>
							@Jonathankerth
						</a>
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
