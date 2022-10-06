import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CharacterSearch from './components/characters/CharacterSearch';
import ComicSearch from './components/comics/ComicSearch';
import Favorites from './components/Favorites';

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
					<Route
						path='/characters'
						element={
							<CharacterSearch
								setFavorites={setFavorites}
								favorites={favorites}
							/>
						}
					/>
					<Route
						path='/comics'
						element={
							<ComicSearch setFavorites={setFavorites} favorites={favorites} />
						}
					/>
					<Route
						path='/favorites'
						element={
							<Favorites favorites={favorites} setFavorites={setFavorites} />
						}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
