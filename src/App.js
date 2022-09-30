import './App.css';
import md5 from 'js-md5';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const PUBLIC_KEY = '8fa1ee4de5ebe1e37809c3ee752415b9';
const PRIVATE_KEY = '0137e4de77a2c6ed314c49fbca3f3b71182cfa3d';


function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    console.log(ts, hash);
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharacters(data.data.results);
      })
      // set error state
      .catch(() => console.log('error'))
  }, []);

  return (
		<div className='App'>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/characters'>Characters</Link>
				<Link to='/comics'>Comics</Link>
				<Link to='/stories'>Stories</Link>
			</nav>
			<main>
				<Routes>{/* <Route path="" element={}/> */}</Routes>
			</main>
      {characters.map((character) => {
        return (<h1>{character.name}</h1>)
      })}
      <form action=""></form>
		</div>
	);
}

export default App;
