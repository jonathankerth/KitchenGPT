import React from "react";
import Chat from "./Chat";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>KitchenGPT</h1>
				<p>Got a cooking question? Ask away!</p>
			</header>
			<main className="chatbox">
				<Chat />
			</main>
		</div>
	);
}

export default App;
