import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Character from './components/Character';
import Comic from './components/Comic';
import Story from './components/Story';

function App() {

  return (
		<div className='App'>
			<nav>
				<Header />
			</nav>
			<main>
				<h1>Welcome to Marvel-pedia!</h1>
				<Routes>
					<Route path='/characters' element={<Character />} />
					<Route path='/comics' element={<Comic />} />
					<Route path='/stories' element={<Story />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
