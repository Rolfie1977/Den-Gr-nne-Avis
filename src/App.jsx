import { useState } from "react";
import Approuter from "./Approuter/Approuter";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
	return (
		<>
			<Header />
			<Approuter />
			<Footer />
		</>
	);
}

export default App;
