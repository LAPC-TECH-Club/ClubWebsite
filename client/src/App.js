import { Home, NotFound } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
