import { Home, NotFound, Featured, About, Community } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/featured" element={<Featured />} />
					<Route path="/about" element={<About />} />
					<Route path="/community" element={<Community />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Footer></Footer>
		</div>
	);
}

export default App;
