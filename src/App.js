import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/signup';
import LoginPage from './components/login';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<LoginPage/>}/>
					<Route path="/signup" element={<SignupPage/>}/>
				</Routes>
			</Router>
			{/* <HeaderPage /> */}
		</div>
	);
}

export default App;