import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CharacterList from './components/CharacterList';
import CharacterSearch from './components/CharacterSearch';
// import Comic from './components/Comic';
import Favorites from './components/Favorites';
import SearchForm from './components/SearchForm';
// import Story from './components/Story';

function App() {
	const [favorites, setFavorites] = useState([]);

  return (
		<div className='App'>
			<nav>
				<Header />
			</nav>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/characterlist' element={<CharacterList />} />
					<Route path='/charactersearch' element={<CharacterSearch setFavorites={setFavorites} favorites={favorites} />} />
					<Route path='/favorites' element={<Favorites favorites={favorites} />} />
					{/* <Route path='/comics' element={<Comic />} />
					<Route path='/stories' element={<Story />} /> */}
				</Routes>
			</main>
		</div>
	);
}

export default App;
