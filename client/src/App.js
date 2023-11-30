import { Home, NotFound, Featured } from "./pages";
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
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Footer></Footer>
		</div>
	);
}

export default App;
